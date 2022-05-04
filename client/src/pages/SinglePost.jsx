import { Avatar, Container, Typography, Link, Breadcrumbs, Button } from '@mui/material'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { green, red } from '@mui/material/colors';
import { SinglePostCard } from '../styles/styles';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const SinglePost = () => {
    const PF = "http://localhost:5000/upload/"

    const [post, setPost] = useState({});
    const param = useParams();
    const user = useSelector(state => state.auth.user)
    const [edit, setEdit] = useState(false);
    const [ title, setTitle] = useState("");
    const [ description, setDescription] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/"+ param.id);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        }
        fetchPost();
    },[param.id]);

    const handleDelete = () => {      
        const fetchDelete = async () => {
            await axios.delete("http://localhost:5000/api/posts/"+ param.id);
            window.location.replace('/');
        }
        fetchDelete();
    }

    const handleUpdate = async () => {
        try {
            await axios.put("http://localhost:5000/api/posts/"+ param.id, {
                email: user.email,
                title,
                description
            })
            setEdit(false);     
            console.log('updated');
            window.location.reload(); 
        } catch(err) {
            console.log(err.message);
        }
    }

  return (
    <Container>
        <Breadcrumbs aria-label="breadcrumb" mt={3}>
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Typography color="primary">Write Post</Typography>
        </Breadcrumbs>
        <SinglePostCard>
            { post.photo && <img src={PF+post.photo} alt="" />}
            <div>
                <div className="singlePostInfo">
                    <h2>
                        <span className="patrick-font">Author:</span> 
                        <span className="handlee-font">{post.email}</span>
                    </h2>
                    <div className="avator">
                        <Avatar
                            onClick={() => setEdit(true)}
                             sx={{bgcolor: green[500]}}>
                            <AiOutlineEdit />
                        </Avatar>
                        <Avatar 
                            sx={{bgcolor: red[500], marginLeft: "1rem"}}
                            onClick={handleDelete}
                             >
                            <AiOutlineDelete />
                        </Avatar>
                    </div>                   
                </div>
                {edit ? 
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                />
                :
                    <Typography className="patrick-font" variant="h4">{post.title}</Typography>
                }

                {edit ? 
                <>
                    <textarea   
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                    <Button variant="contained" onClick={handleUpdate}>Publish</Button>
                </>
                :
                    <Typography variant="body2" mb={5} color="text.secondary">{post.description} </Typography>
                }               
                
            </div>
        </SinglePostCard>
    </Container>
  )
}

export default SinglePost