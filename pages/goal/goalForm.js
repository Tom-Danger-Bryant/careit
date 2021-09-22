
import React from 'react';
import {InputBase,Select,MenuItem,Slider} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { MedalOutline,GridOutline,HourglassOutline,CashOutline} from 'react-ionicons';
import { PrimaryButton  } from '../../components';


const ICON_COLOR="#5BBC93";

const CATEGORIES = ['Category1', 'Category2','Category3'];

const MARKS = [
  {value : 0,
  label : '6mo'},
  {value : 33,
    label : '1yr'
  },

  {value : 66,
    label : '18mo'
  },
  {value : 100,
    label : '2yr'
  },
  ]

const TextInput =  ({input,meta,label}) =>  {
  return (
    <div className='flex-1 flex flex-col ml-4'>
    <div className='text-sm font-body text-gray-500'>{label}</div>
    <InputBase classes={{
      root: 'border-b border-gray-500', input : ' border-b' }} key={`${input.name}-input-base`} id={`${input.name}-input`} error={!!(meta.touched && meta.error)} {...input}/>
      </div>

  )

}
const GoalForm = () => {
  
  const submitGoal = () =>{

  }

  return (
    <Form
      initialValues={{"goal" : ''}}
      onSubmit={submitGoal}
      render={({handleSubmit, pristine})=>(
        <form onSubmit={handleSubmit} className='min-w-full flex flex-col space-y-2 shadow-md rounded-md p-4'>
          <div className='flex flex-row items-center min-w-full'>
            <MedalOutline color={ICON_COLOR} size="15px"/>
          <Field key='input-goal-field' name='goal' label='Goal' component={TextInput}/>
          </div>
          <div className='flex flex-row items-center min-w-full pb-4'>
          <CashOutline color={ICON_COLOR} size="15px"/>
          <Field key='input-goal-field' name='amount' label='Goal Amount' render={({input,meta})=>(
              <div className='flex-1 flex flex-col ml-4'>
              <div className='text-sm font-body text-gray-500'>Goal Amount</div>
              <InputBase 
              startAdornment='$'
              classes={{
                root: 'border-b border-gray-500' }} key={`${input.name}-input-base`} id={`${input.name}-input`} error={!!(meta.touched && meta.error)} {...input}/>
                </div>
          )

          }/>
          </div>

          <div className='flex flex-row items-center min-w-full'>
            <GridOutline color={ICON_COLOR} size="15px"/>
            <div className='flex-1 flex flex-col ml-4'>
            <div className='text-sm font-body text-gray-500'>Category</div>
            <Select id='category-input'>
              {
                CATEGORIES.map((cat)=>(<MenuItem value={cat}>{cat}</MenuItem>))
              }
            </Select>
            </div>
          </div>
          <div className='flex flex-row items-center min-w-full'>
          <HourglassOutline color={ICON_COLOR} size="15px"/>
          <div className='flex-1 flex flex-col ml-4'>
            <div className='text-sm font-body text-gray-500'>Timeline</div>
            <div className='px-2'>
          <Slider id='timeline-slider' marks={MARKS} step={null}/>
          </div>
          </div>
          </div>
          <div className='flex min-w-full justify-center'>
          <PrimaryButton>
              Submit
          </PrimaryButton>
          </div>
        </form>
      )}


    />

  );


}


export {
    GoalForm
}