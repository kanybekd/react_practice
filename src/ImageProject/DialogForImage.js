import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogForImage({
  openDialog,
  setOpenDialog,
  dialogData,
}) {
  const handleClose = () => {
    setOpenDialog(false);
  };
  console.log(dialogData);
  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialogData.alt_description}
        </DialogTitle>
        <img src={dialogData.user.profile_image.large} alt="" />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogData.user.bio}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
