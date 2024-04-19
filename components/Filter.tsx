import { DateData, FilterProps } from '@/types/Type';
import React from 'react'
import { useForm } from 'react-hook-form';

const Filter = (props: FilterProps) => {

    const { handleSubmit, register } = useForm<DateData>()

    function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        props.clickHandler(event);
    }


    return (
        <div className='home-top-div col-xxl-5 col-xl-7 row justify-content-center'>

            <form onSubmit={handleSubmit(props.sumbitDate)}>

                <input type='datetime-local' placeholder='Start Date' className='date-input' {...register('startDate')} />
                <input type='datetime-local' placeholder='End Date' className='date-input' {...register('endDate')} />
                <button className='btn btn-light btn-outline-danger search-button'>Search</button>
                <button className='add-button btn btn-light btn-outline-danger' onClick={clickHandler} >+</button>

            </form>

        </div>
    )
}
export default Filter