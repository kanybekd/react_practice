// import { useEffect, useState } from "react";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import { Input } from "reactstrap";

// import Loading from "./Loading";
// import DialogForImage from "./DialogForImage";

// function MyImagesApp() {
//   const [images, setImages] = useState([]);
//   const [searchText, setSearch] = useState("");
//   const [openDialog, setOpenDialog] = useState(false);
//   const [dialogData, setDialogData] = useState("");

//   const handleImageClick = (image) => {
//     console.log("dialog open close");
//     setOpenDialog(true);
//     setDialogData(image);
//   };

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   };
//   console.log(searchText);

//   useEffect(() => {
//     const myUrl =
//       "https://api.unsplash.com/photos/?client_id=67dzJ6HsOJ0oE9moFGN9_AGJ-de6jwkL-CAULtu3QWg&page=1";
//     setTimeout(() => {
//       fetch(myUrl)
//         .then((res) => res.json());
//         .then((data) => setImages(data));
//     }, 3000);
//   }, []);

//   const filtered = images.filter((image) =>
//     image.alt_description.includes(searchText)
//   );

//   return (
//     <div className="container">
//       {!images.length ? (
//         <Loading />
//       ) : (
//         <Box sx={{ flexGrow: 1 }}>
//           <Input
//             style={{ margin: "20px" }}
//             onChange={handleChange}
//             value={searchText}
//           />
//           <Grid
//             container
//             spacing={{ xs: 2, md: 3 }}
//             columns={{ xs: 4, sm: 8, md: 12 }}
//           >
//             {filtered.map((image, index) => (
//               <Grid item xs={2} sm={4} md={4} key={image.id}>
//                 <Card
//                   sx={{ maxWidth: 345 }}
//                   onClick={() => handleImageClick(image)}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="194"
//                     image={image.urls.small}
//                     alt={image.alt_description}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" color="text.primary">
//                       {image.alt_description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       )}
//       <DialogForImage
//         openDialog={openDialog}
//         setOpenDialog={setOpenDialog}
//         dialogData={dialogData}
//       />
//     </div>
//   );
// }

// export default MyImagesApp;
