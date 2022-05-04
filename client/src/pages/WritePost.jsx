import React, {useState} from 'react'
import { Breadcrumbs, Button, Container, Link, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { fromBottomVariant } from '../styles/animation';
import { CustomForm } from '../styles/styles';
import { AiFillCamera } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import axios from 'axios'

const WritePost = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {user} = useSelector(state => state.auth);
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            email: user.email,
            username: user.username,
            title,
            description,
        }
        if(file) {
            const data = new FormData();
            const filename = file.name;
            data.append("filename", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
            await axios.post("http://localhost:5000/api/upload", data);
            }catch (err) {
                console.log("Can't upload file" + err.message);
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/posts/", newPost);
            res.data && window.location.replace('/');
        } catch(err) {
            console.error(err.message);
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
        <motion.div
            variants={fromBottomVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        > 
            {file && <img src={URL.createObjectURL(file)} alt="img" className="image" />}
            <CustomForm onSubmit={handleSubmit}>
                <label htmlFor="fileInput">
                    <div className="file">
                        <AiFillCamera size={25}/>
                        <Typography variant="p" ml={1}>Upload Image</Typography>
                    </div>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} onChange={e => setFile(e.target.files[0])} />
                <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" placeholder="Title" />
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"></textarea>
                <Button variant="contained" type="submit">Publish</Button>
            </CustomForm>
        </motion.div>
    </Container>
  )
}

export default WritePost