import { motion } from 'framer-motion'

export const imgVariant = {
        hidden: {
            x : "100vw",
        },
        visible: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: "50"
            }
        },
        exit :{
            x: "100vw",
            transiton: {
                ease: "easeInOut",
                duration: 1,
            }
        }
    }

export const formVariant = {
        hidden: {
            x : "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: "50"
            }
        },
        exit :{
            x: "-100vw",
            transiton: {
                ease: "easeInOut",
                duration: 1
            }
        }
    }

export const fromBottomVariant = {
        hidden: {
            y: "100vh"
        },
        visible: {
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: "50"
            }
        },
        exit :{
            y: "100vh",
            transiton: {
                ease: "easeInOut",
                duration: 1
            }
        }
    }

export const navVariant = {
        hidden: {
            x: "200vw"
        },
        visible: {
            x: "100vw",
            position: "absolute",
            transition : {
                ease: "linear",
            }
        },
        exit: {
            x: "200vw",
            transition : {
                duration: 0.3, 
                ease: "linear"
            }
        }
    }