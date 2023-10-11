import React, { useState } from 'react'
import firstImage from '../../assets/firstImage.png'
import {RiEye2Line, RiEyeCloseFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Registration = () => {
    const[email, setEmail] = useState('');
    const[fullName, setFullName] = useState('');
    const[password, setPassword] = useState('');

    const[emailerror, setEmailerror] = useState('');
    const[fullNameerror, setFullNameerror] = useState('');
    const[passworderror, setPassworderror] = useState('');
    const[showPassword, setShowPassword] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value);
        setEmailerror('')
    }
    const handleFullName = (e) =>{
        setFullName(e.target.value);
        setFullNameerror('')
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        setPassworderror('')
    }

    const handleClick = () =>{
        if(!email){
            setEmailerror('Email is required');
        }else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailerror('Invalid email address')
            }
        }



        if(!fullName){
            setFullNameerror('FUll name is required');
        }


        if(!password){
            setPassworderror('Password is required');
        }else if(!/(?=.*[a-z])/.test(password)){
            setPassworderror('The string must contain at least 1 lowercase alphabetical character')
        }else if(!/(?=.*[A-Z])/.test(password)){
            setPassworderror('The string must contain at least 1 uppercase alphabetical character')
        }else if(!/(?=.*[0-9])/.test(password)){
            setPassworderror('The string must contain at least 1 numeric character')
        }else if(!/(?=.*[!@#$%^&*])/.test(password)){
            setPassworderror('The string must contain at least one special character(For example: !@#$%^&*)')
        }else if(!/(?=.{8,})/.test(password)){
            setPassworderror('The string must be eight characters or longer')
        }
    }

  return (
    <div className='flex'>
        <div className='w-1/2 flex justify-end'>
            <div className='mr-[69px] mt-[225px]'>
                <h1 className='text-[#11175D] font-nunito text-[34.401px] font-bold'>Get started with easily register</h1>
                <p className=' w-[319px] text-black font-nunito text-[20.641px] mt-[13px]'>Free register <span className='text-[#808080]'>and</span>  you can enjoy it</p>
                <div className='mt-[62px] relative w-96'>
                    <input type="email" onChange={handleEmail} className='w-full py-[26px] px-[50px] border-2 border-[#11175D] rounded-lg'/>
                    <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13.76px] text-[#11175D] tracking-[1.032px] px-[18px] bg-white'>Email Address</p>
                    {
                        emailerror &&
                        <p className='font-nunito font-semibold bg-[#FF0000] text-white px-[10px] py-[2px] mt-[2px] rounded'>{emailerror}</p>
                    }
                </div>
                <div className='mt-[47px] relative w-96'>
                    <input type="text" onChange={handleFullName} className='w-full py-[26px] px-[50px] border-2 border-[#11175D] rounded-lg '/>
                    <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13.76px] text-[#11175D] tracking-[1.032px] px-[18px] bg-white'>Full name</p>
                    {
                        fullNameerror &&
                        <p className='font-nunito font-semibold bg-[#FF0000] text-white px-[10px] py-[2px] mt-[2px] rounded'>{fullNameerror}</p>
                    }
                </div>
                <div className='mt-[47px] relative w-96'>
                    <input type={showPassword ? 'text' : 'password'} onChange={handlePassword} className='w-full py-[26px] px-[50px] border-2 border-[#11175D] rounded-lg '/>
                    <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13.76px] text-[#11175D] tracking-[1.032px] px-[18px] bg-white'>Password</p>
                    {
                        showPassword ?
                        <RiEye2Line onClick={()=>setShowPassword(!showPassword)} className='absolute top-[28px] right-[20px]'/> : <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)} className='absolute top-[28px] right-[20px]'/>
                    }
                    {
                        passworderror &&
                        <p className='font-nunito font-semibold bg-[#FF0000] text-white px-[10px] py-[2px] mt-[2px] rounded'>{passworderror}</p>
                    }
                </div>
                <div className='mt-[51px] w-96'>
                <div onClick={handleClick} className='bg-primary cursor-pointer text-center py-[20px] rounded-[86px]'>
                    <p className='font-nunito font-semibold text-[20px] text-white'>Sign Up</p>
                </div>
                </div>
                <div className='text-[#03014C] font-sans text-[13.338px] mt-[35px] ml-[75px]'>
                <h1>Already  have an account ? <span className='text-[#EA6C00] font-bold'><Link to='/login'>Sign In</Link></span></h1>
            </div>
            </div>
        </div>
        <div className='w-1/2 absolute top-0 right-0'>
            <img className='w-full h-screen object-cover' src={firstImage} alt="firstImage" />
        </div>
    </div>
  )
}

export default Registration