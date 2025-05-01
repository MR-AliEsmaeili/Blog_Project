import { useMutation } from "@apollo/client"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { POST_COMMENT_INFO } from "../../Graphql/mutations"
import { ToastContainer, toast } from "react-toastify"

const CommentForm = ({ formState, setFormState, slug }) => {
  const { name, email, comment } = formState
  const [sendComment, { loading, data }] = useMutation(POST_COMMENT_INFO, {
    variables: { name, email, comment, slug },
  })
  const sendHandler = () => {
    if (name && email && comment) {
      sendComment()
    } else {
      toast.warn("لطفا فیلدهای فرم را تکمیل کنید !")
    }
  }
  if (data) {
    toast.success("کامنت شما ارسال شد و منتظر تایید میباشد !")
    setFormState({})
  }
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
        <TextField
          variant="outlined"
          label="نام"
          sx={{ width: "100%" }}
          value={formState.name}
          onChange={(e) =>
            setFormState({ ...formState, name: event.target.value })
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <TextField
          variant="outlined"
          label="ایمیل"
          sx={{ width: "100%" }}
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: event.target.value })
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        <TextField
          variant="outlined"
          label="متن کامنت"
          sx={{ width: "100%" }}
          rows={3}
          multiline
          value={formState.comment}
          onChange={(e) =>
            setFormState({ ...formState, comment: e.target.value })
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} mx={4} my={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال نظر
          </Button>
        )}
        <ToastContainer position="top-center" />
      </Grid2>
    </Grid2>
  )
}

export default CommentForm
