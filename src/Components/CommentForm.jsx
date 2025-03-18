import { Button, Grid2, TextField, Typography } from "@mui/material"

const CommentForm = () => {
  return (
    <Grid2
      container
      sx={{
        border: "1px solid rgba(144, 144, 144, 0.3)",
        boxShadow: "2px 7px 15px -1px rgba(56,56,56,0.3)",
        borderRadius: 4,
      }}
    >
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <Typography variant="h6" component="p" fontWeight={700}>
          فرم ارسال نظرات
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <TextField variant="outlined" label="نام" sx={{ width: "100%" }} />
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <TextField variant="outlined" label="ایمیل" sx={{ width: "100%" }} />
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <TextField
          variant="outlined"
          label="متن کامنت"
          sx={{ width: "100%" }}
          rows={3}
          multiline
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <Button variant="contained">ارسال نظر</Button>
      </Grid2>
    </Grid2>
  )
}

export default CommentForm
