import React from 'react'

import whatsapp_icon from '../../../../../asset/icon/whatsapp.png'
import instagram_icon from '../../../../../asset/icon/instagram.png'
import tiktok_icon from '../../../../../asset/icon/tik-tok.png'
import { Link } from 'react-router-dom'

const ListLocationModelHomepage = ({article}) => {
    const {slug, type, streetName, longAddress, googleMapsLink, whatsapp, instagram, tikTok} = article.fields
    return (
        <>
            <div className='flex flex-col gap-10 w-[275px] sm:w-[400px]'>
                <div className='flex flex-1 flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        {
                            type === false ? (
                                <p className='text-[16px] worksans-600 text-amber-500'>Pusat</p>
                            ) : (
                                <p className='text-[16px] worksans-600 text-gray-600'>Cabang</p>
                            )
                        }
                        <p className='worksans-500 duration-200'>{streetName}</p>
                        <a href={googleMapsLink} target={'_blank'} rel="noreferrer" className='worksans text-gray-600 text-[16px] hover:underline'>{longAddress}</a>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                            <p className='worksans text-gray-600'>{whatsapp}</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                            <p className='worksans text-gray-600'>{instagram}</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                            <p className='worksans text-gray-600'>{tikTok}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/location/${slug}`} className='worksans-500 hover:text-amber-500 underline underline-offset-[10px] decoration-2 decoration-amber-500'>
                    Detil lokasi
                </Link>
            </div>
        </>
    )
}

export default ListLocationModelHomepage