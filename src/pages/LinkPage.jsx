import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

export default function LinkPage() {
  const [data, setData] = useState({
    id: 0,
    userID: '',
    title: '',
    profileImage: 'https://wegotthiscovered.com/wp-content/uploads/2023/03/wonder-woman.jpg',
    description: '',
    backgroundImage: '',
    designPattern: {
      scheme: '',
      color: '',
      textColor: '',
      fontFamily: '',
    },
    listOfLinks: [
      {
        title: '',
        description: '',
        image: '',
        directLink: '',
        designPattern: {
          shape: '',
          shapeColor: '',
          shadow: '',
          textColor: '',
          fontFamily: '',
        },
      },
      {
        title: 'Ini Title 2',
        description: '',
        image: '',
        directLink: '',
        designPattern: {
          shape: '',
          shapeColor: '',
          shadow: '',
          textColor: '',
          fontFamily: '',
        },
      },
    ],
    socialMedia: {
      facebook: '',
      instagram: '',
      youtube: '',
      tiktok: '',
      twitter: '',
      linkedin: '',
      designPattern: {
        iconStyle: '',
        Placement: '',
      },
    },
  });

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing="2">
          <Grid item xl="8">
            <h2>Main Design</h2>

            <div style={{ display: 'flex' }}>
              <div style={{ width: '100%' }}>
                <h4>Profile Image</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={
                      data.profileImage
                        ? data.profileImage
                        : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                    }
                    style={{ height: '100px', width: '100px', borderRadius: '100%', objectFit: 'cover' }}
                    alt="woman hero"
                  />
                  <Button variant="contained" component="label" size="small" sx={{ fontWeight: 'bold' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const reader = new FileReader();

                          reader.readAsDataURL(e.target.files[0]);
                          reader.onload = function () {
                            setData({ ...data, profileImage: reader.result });
                          };
                        }
                      }}
                      hidden
                    />
                    {data.profileImage ? 'Edit Image' : 'Add Image'}
                  </Button>
                  {data.profileImage ? (
                    <Button
                      variant="outlined"
                      size="small"
                      type="submit"
                      onClick={() => {
                        setData({ ...data, profileImage: '' });
                      }}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Delete
                    </Button>
                  ) : null}
                </div>
              </div>
              <div style={{ width: '100%' }}>
                <h4>Background Image</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '100%' }}>
                  <img
                    src={
                      data.backgroundImage
                        ? data.backgroundImage
                        : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                    }
                    style={{ height: '100px', width: '100px', borderRadius: '14px', objectFit: 'cover' }}
                    alt="woman hero"
                  />
                  <Button variant="contained" component="label" size="small" type="submit" sx={{ fontWeight: 'bold' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const reader = new FileReader();

                          reader.readAsDataURL(e.target.files[0]);
                          reader.onload = function () {
                            setData({ ...data, backgroundImage: reader.result });
                          };
                        }
                      }}
                      hidden
                    />
                    {data.backgroundImage ? 'Edit Image' : 'Add Image'}
                  </Button>

                  {data.backgroundImage ? (
                    <Button
                      variant="outlined"
                      size="small"
                      type="submit"
                      onClick={() => {
                        setData({ ...data, backgroundImage: '' });
                      }}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Delete
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
            <div style={{}}>
              <TextField
                required
                variant="standard"
                label="Page Title"
                type="text"
                value={data.title}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
                autoComplete="off"
                sx={{ width: '100%' }}
              />

              <TextField
                required
                variant="standard"
                label="Description"
                type="text"
                value={data.description}
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
                autoComplete="off"
                sx={{ width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
              <Button variant="contained" size="large" type="submit" sx={{ fontWeight: 'bold' }}>
                Choose Design Pattern
              </Button>
            </div>

            <h2>List of Links</h2>

            {[1, 2, 3].map((item) => {
              return (
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item md="auto" sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={
                        data.backgroundImage
                          ? data.backgroundImage
                          : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                      }
                      style={{ height: '100px', width: '100px', borderRadius: '14px', objectFit: 'cover' }}
                      alt="woman hero"
                    />
                  </Grid>
                  <Grid item md>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        borderRadius: '12px',
                        boxShadow: '0px 3px 7px 0px rgba(0,0,0,0.63)',
                        padding: '14px',
                      }}
                    >
                      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Title Link</div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, suscipit saepe sunt excepturi sit
                        nisi aliquam, vero deleniti quisqua
                      </div>
                      <span>https://www.youtube.com/@RumahEditor/videos</span>
                    </div>
                  </Grid>
                </Grid>
              );
            })}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
              <Button variant="contained" size="large" type="submit" sx={{ fontWeight: 'bold' }}>
                Choose Design Pattern
              </Button>
            </div>

            <TextField
              required
              variant="standard"
              label="Description"
              type="text"
              value={data.description}
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              autoComplete="off"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xl="4" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              id="about"
              style={{
                position: 'sticky',
                top: '50px',
                marginLeft: '14px',
                marginRight: '14px',
                width: '280px',
                height: '520px',
                borderRadius: '32px',
                backgroundColor: 'skyblue',
                padding: '16px',
                overflowY: 'scroll',
                boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.75)',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non voluptatem laboriosam perspiciatis
              modi debitis, eius libero voluptas soluta laudantium numquam nisi corporis quas inventore esse commodi,
              beatae, natus similique? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum inventore ullam,
              dolore laborum blanditiis repellendus ratione excepturi sapiente rem quo quaerat nesciunt nulla voluptas
              adipisci officiis unde quas laudantium omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Delectus nam cumque in eos, dolor a? Facere unde aliquid necessitatibus pariatur, quas quaerat sequi
              accusantium temporibus at! Fugit assumenda dignissimos dolor! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Cum iste eum consectetur unde praesentium ullam sint fugiat at repellat. Modi, at a
              distinctio nobis asperiores quo officia enim illo nesciunt. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus quos recusandae expedita? Atque beatae vero voluptas unde cum inventore.
              Minima, nam adipisci illo nesciunt deleniti velit sed earum quaerat provident. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Consectetur magnam expedita tenetur debitis minima esse nulla odit omnis?
              Cumque ut unde suscipit itaque id quae ratione totam impedit numquam pariatur.
            </div>
          </Grid>
        </Grid>
      </Container>

      <div>{data.title}</div>
      <div>{data.description}</div>
    </>
  );
}
