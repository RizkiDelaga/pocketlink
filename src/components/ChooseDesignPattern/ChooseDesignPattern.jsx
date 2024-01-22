import { Box, Container, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { HuePicker } from 'react-color';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function ChooseDesignPattern({ data, setData }) {
  const [designPattern, setDesignPattern] = useState({
    scheme: '',
    color: '#000000',
    textColor: '#000000',
    fontFamily: '',
  });

  const schemeList = [
    {
      name: 'Classic',
      type: 'Free',
    },
    {
      name: 'Hero',
      type: 'Free',
    },
    {
      name: 'Frame',
      type: 'Free',
    },
    {
      name: 'Pro',
      type: 'Premium',
    },
    {
      name: 'Modern',
      type: 'Premium',
    },
  ];

  const fontFamilyList = [
    {
      name: 'Helvetica',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Arial',
      style: 'Modern',
      type: 'Premium',
    },
    {
      name: 'Trebuchet MS',
      style: 'Classic',
      type: 'Free',
    },
    {
      name: 'Tahoma',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Verdana',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Courier',
      style: 'Modern',
      type: 'Premium',
    },
    {
      name: 'Luminari',
      style: 'Classic',
      type: 'Free',
    },
    {
      name: 'Brush Script MT',
      style: 'Classic',
      type: 'Premium',
    },
    {
      name: 'Vendetta',
      style: 'Classic',
      type: 'Free',
    },
    {
      name: 'Georgia',
      style: 'Handwritten',
      type: 'Free',
    },
    {
      name: 'Lucida',
      style: 'Handwritten',
      type: 'Premium',
    },
    {
      name: 'Baskerville',
      style: 'Handwritten',
      type: 'Free',
    },
    {
      name: 'Comic Sans MS',
      style: 'Handwritten',
      type: 'Premium',
    },
    {
      name: 'Lato',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Didot',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Poppins',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Roboto',
      style: 'Modern',
      type: 'Free',
    },
    {
      name: 'Futura',
      style: 'Handwritten',
      type: 'Premium',
    },
  ];

  return (
    <Container fluid>
      <h1>Choose Design Pattern</h1>
      {data.title}
      <Grid container spacing={2}>
        <Grid item xs="12" sm="6">
          <h3>Scheme Color</h3>
          <HuePicker
            width="100%"
            color={designPattern.color}
            onChange={(color) => {
              setDesignPattern({ ...designPattern, color: color.hex });
              // console.log(color);
            }}
          />
          <h3 style={{ color: designPattern.color }}>{designPattern.color}</h3>
        </Grid>
        <Grid item xs="12" sm="6">
          <h3>Font Color</h3>
          <HuePicker
            width="100%"
            color={designPattern.textColor}
            onChange={(color) => {
              setDesignPattern({ ...designPattern, textColor: color.hex });
            }}
          />

          <h3 style={{ color: designPattern.textColor }}>{designPattern.textColor}</h3>
        </Grid>
      </Grid>

      <h3>Scheme</h3>
      <h3>{designPattern.scheme}</h3>
      <MiniSwiperCard
        element={schemeList
          .sort((a, b) => {
            return a.type.localeCompare(b.type);
          })
          .map((item) => {
            return (
              <SwiperSlide>
                <Paper
                  onClick={() => setDesignPattern({ ...designPattern, scheme: item.name })}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100px',
                    height: '140px',
                    margin: '4px',
                    borderRadius: '4px',
                    color: designPattern.scheme === item.name ? '#FE6D6D' : item.type === 'Premium' ? 'orange' : 'none',
                    border:
                      designPattern.scheme === item.name
                        ? '3px #FE6D6D solid'
                        : item.type === 'Premium'
                        ? '3px orange solid'
                        : '1px #111 solid',
                    boxShadow:
                      designPattern.scheme === item.name
                        ? '0px 0px 12px 0px rgba(0,0,0,0.80)'
                        : '0px 0px 8px -2px rgba(0,0,0,0.75)',
                  }}
                >
                  {item.name}
                </Paper>
              </SwiperSlide>
            );
          })}
      />

      <h3>Font Family</h3>
      <h3>{designPattern.fontFamily}</h3>

      <p>Modern Style</p>
      <MiniSwiperCard
        element={fontFamilyList
          .filter((font) => {
            console.log(font);
            return font.style === 'Modern';
          })
          .sort((a, b) => {
            return a.type.localeCompare(b.type);
          })
          .map((item) => {
            return (
              <SwiperSlide>
                <Paper
                  onClick={() => setDesignPattern({ ...designPattern, fontFamily: item.name })}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px',
                    margin: '4px',
                    color:
                      designPattern.fontFamily === item.name ? '#FE6D6D' : item.type === 'Premium' ? 'orange' : 'none',
                    border:
                      designPattern.fontFamily === item.name
                        ? '3px #FE6D6D solid'
                        : item.type === 'Premium'
                        ? '3px orange solid'
                        : '1px #111 solid',
                    boxShadow:
                      designPattern.fontFamily === item.name
                        ? '0px 0px 12px 0px rgba(0,0,0,0.80)'
                        : '0px 0px 8px -2px rgba(0,0,0,0.75)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontFamily: item.name,
                    fontSize: '18px',
                  }}
                >
                  {item.name}
                </Paper>
              </SwiperSlide>
            );
          })}
      />

      <p>Classic Style</p>
      <MiniSwiperCard
        element={fontFamilyList
          .filter((font) => {
            console.log(font);
            return font.style === 'Classic';
          })
          .sort((a, b) => {
            return a.type.localeCompare(b.type);
          })
          .map((item) => {
            return (
              <SwiperSlide>
                <Paper
                  onClick={() => setDesignPattern({ ...designPattern, fontFamily: item.name })}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px',
                    margin: '4px',
                    color:
                      designPattern.fontFamily === item.name ? '#FE6D6D' : item.type === 'Premium' ? 'orange' : 'none',
                    border:
                      designPattern.fontFamily === item.name
                        ? '3px #FE6D6D solid'
                        : item.type === 'Premium'
                        ? '3px orange solid'
                        : '1px #111 solid',
                    boxShadow:
                      designPattern.fontFamily === item.name
                        ? '0px 0px 12px 0px rgba(0,0,0,0.80)'
                        : '0px 0px 8px -2px rgba(0,0,0,0.75)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontFamily: item.name,
                    fontSize: '18px',
                  }}
                >
                  {item.name}
                </Paper>
              </SwiperSlide>
            );
          })}
      />

      <p>Handwritten Style</p>
      <MiniSwiperCard
        element={fontFamilyList
          .filter((font) => {
            console.log(font);
            return font.style === 'Handwritten';
          })
          .sort((a, b) => {
            return a.type.localeCompare(b.type);
          })
          .map((item) => {
            return (
              <SwiperSlide>
                <Paper
                  onClick={() => setDesignPattern({ ...designPattern, fontFamily: item.name })}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px',
                    margin: '4px',
                    color:
                      designPattern.fontFamily === item.name ? '#FE6D6D' : item.type === 'Premium' ? 'orange' : 'none',
                    border:
                      designPattern.fontFamily === item.name
                        ? '3px #FE6D6D solid'
                        : item.type === 'Premium'
                        ? '3px orange solid'
                        : '1px #111 solid',
                    boxShadow:
                      designPattern.fontFamily === item.name
                        ? '0px 0px 12px 0px rgba(0,0,0,0.80)'
                        : '0px 0px 8px -2px rgba(0,0,0,0.75)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontFamily: item.name,
                    fontSize: '18px',
                  }}
                >
                  {item.name}
                </Paper>
              </SwiperSlide>
            );
          })}
      />
    </Container>
  );
}

export function MiniSwiperCard({ element }) {
  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        660: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        950: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {element}
    </Swiper>
  );
}
