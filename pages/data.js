const imageCardsData = [
    {
        id:2335630,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWBdSAKHS04bGqgV05jCXS-NDT4UvjPsg7Q&usqp=CAUs",
        title: "See You Next time",
        description1: "Don't forget to subscribe || Anytime",
        time: "2024-07-20",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    },
    {
        id:2335631,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedFatK1c2PfD1srI4jHdoCsb80G8XAYELdQ&usqp=CAU",
        title: "Just Subscribe",
        description1: "Follow for more uptimes...",
        time: "2018-04-08",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    },
    {
        id:2335632,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNbXEDgcKr58aUTjWbhHzmVxc8lwqHfU-EQ&usqp=CAU",
        title: "The Videoes",
        description1: "Amit and Ajay coreography ",
        time: "2003-04-15",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    },
    {
        id:2335633,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTadNS230f_5fl1Eh8f4je5c6_DKCz4IRuZA&usqp=CAU",
        title: "Thankyou For Watching",
        description1: "A way to live together and live happilly",
        time: "2014-12-14",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    },
    {
        id:2335634,
        src: "https://i.ytimg.com/vi/0aGZ0Fft63g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDt_drMaV4a3_qRZn4FR-FmQxOIVQ",
        title: "Create a youtube end card ",
        description1: "Create your own exciting and impresive youtube end card",
        time: "2019-11-13",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    },
    {
        id:2335635,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ljoQqY1MC8O9jUn3ftUKEQ_CK_9zpMpJQQ&usqp=CAU",
        title: "MyChannel",
        description1: "Welcome to the channel",
        time: "2024-04-01",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    },
    {
        id:2335636,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9aMMe3N8wrAVzZKROT5Ct-wVm92eZN3HuA&usqp=CAU",
        title: "Use a Youtube Card ",
        description1: "how to use youtube card",
        time: "2020-09-02",
        profileImageSrc:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rbs-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        comments: []
    }
];
function getData(){
    const data=localStorage.getItem("localCardsData")
    if(data){
        return JSON.parse(data);
    }else{
        localStorage.setItem('localCardsData',JSON.stringify(imageCardsData));
        return imageCardsData;
    }
}