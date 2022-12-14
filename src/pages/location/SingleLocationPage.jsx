import React, { Component } from 'react'
import client from '../../client'
import { useParams } from 'react-router-dom';

import Navbar from '../../components/navigation bar/Navbar';
import MarketingBox from '../../components/marketing box/MarketingBox';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

import whatsapp_icon from '../../asset/icon/whatsapp.png'
import instagram_icon from '../../asset/icon/instagram.png'
import tiktok_icon from '../../asset/icon/tik-tok.png'

import background from '../../asset/image/background.png'

export function withRouter(Children){
    return() => {
        const match = {params: useParams()};
        return <Children match={match}/>
    }
}

class SingleLocationPage extends Component {
    state = {
        article: null,
        packetPopup: false
    }

    handlePopup = ()=>{
        this.setState({
            packetPopup: true
        })
    }

    componentDidMount() {
        const { params } = this.props.match
        if(params && params.slug){
            client.getEntries({content_type: 'location', 'fields.slug': params.slug}).then((response) => {
                this.setState({article: response.items[0]})
            })
        }
    }
    render() {
        if(!this.state.article){
            return <p>Loading</p>
        }
        return (
            <>
                <Navbar/>
                <img src={background} alt="" className='absolute -z-10' />
                <div className='flex flex-col gap-44 py-32 px-5 lg:px-32'>
                    <div className='flex flex-col gap-10'>
                        <div dangerouslySetInnerHTML={{ __html: this.state.article.fields.googleMapsEmbed }} className='w-full h-[200px] sm:h-[450px]'></div>
                        <div className='flex flex-col gap-10 py-10'>
                            <div className='flex flex-col items-center text-center gap-2'>
                                <p className='text-[31px] worksans-600'>{this.state.article.fields.streetName}</p>
                                <p className='worksans text-slate-500 w-fit'>{this.state.article.fields.longAddress}</p>
                            </div>
                            <div className='flex flex-wrap items-center justify-center gap-x-20 gap-y-10 whitespace-nowrap'>
                                <a href={this.state.article.fields.instagramUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5'>
                                    <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                                    <p className='worksans text-slate-500 text-[14px]'>{this.state.article.fields.instagram}</p>
                                </a>
                                <a href={this.state.article.fields.tiktokUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 cursor-pointer'>
                                    <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                                    <p className='worksans text-slate-500 text-[14px]'>{this.state.article.fields.tikTok}</p>
                                </a>
                                <a href={this.state.article.fields.whatsappUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5'>
                                    <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                                    <p className='worksans text-slate-500 text-[14px]'>{this.state.article.fields.whatsapp}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <MarketingBox/>
                </div>
                <Footer/>
                <ScrollToTop/>
            </>
        )
    }
}

export default withRouter(SingleLocationPage);