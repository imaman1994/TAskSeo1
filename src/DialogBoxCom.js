import {
    Button,
    Dialog,
    Grid,
    IconButton,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import { useForm } from "react-hook-form";
  // import ProgressDetailsBox from "./component/ProgressDetailsBox";
  
  function DialogBoxCom() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit  } = useForm();
    const onSubmit = (data) =>{ console.log(data)
      setOpen(false)
    };
    
  
  
    return (
      <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <Dialog open={open}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid class="relative  w-96 flex justify-center p-5">
              <Grid class="flex flex-col w-96">
                  <Grid class="flex justify-between items-center  bg-white">
                    <Typography class="font-semibold font-Inter text-lg">
                      SEO Setting
                    </Typography>
                    <IconButton onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <Typography class="text-xs font-normal text-gray-500">
                      Specify this pages title and description.
                    </Typography>
                  </Grid>
                  <Grid class="flex flex-col mt-5">
                    <label class=" text-gray-700 font-medium text-sm font-Inter ">Title Tag</label>
                    <input
                      {...register("tagName", { required: true, maxLength: 20 })}
                      placeholder="Enter a title"
                      class="rounded-sm p-2 border-2 mt-1.5 shadow-sm"
                    />
                    <label class="mb-1.5 mt-5 font-medium text-gray-700 text-sm font-Inter">
                      Meta Discription
                    </label>
                    <textarea
                      {...register("addressArea", {
                        required: true,
                        maxLength: 120,
                      })}
                      placeholder="Enter a description..."
                      class="px-3.5 py-2.5 border-2 shadow-sm"
                    />
                  </Grid>
                  <Box class="flex flex-col justify-center items-center my-5">
                    <Grid class="flex justify-center items-center w-full">
                      <label
                        forhtml="dropzone-file"
                        class="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800"
                      >
                        <Grid class="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            class="mb-3 w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <Typography class='text-sm font-medium'>Click to upload <span class='font-normal text-xs text-gray-500'>or drag and drop </span></Typography>
                          <Typography class='font-normal text-xs text-gray-500'>SVG, PNG, JPG or GIF (max. 800x400px)</Typography>
                        </Grid>
                        <input
                          id="dropzone-file"
                          type="file"
                          {...register("fileName", { required: true })}
                          class="hidden"
                          name='fileName'
                        />
                      </label>
                    </Grid>
                  </Box>
                  {/* <Grid class='border-black  rounded-lg'>
                        <ProgressDetailsBox/>
                  </Grid> */}
                  <Grid class="flex justify-center">
                    <Button class="bg-slate-300 flex flex-row rounded-2xl p-1 ">
                      <Typography class="text-xs px-1 bg-slate-50 rounded-full">
                        0
                      </Typography>
                      <Typography class="text-xs px-1 font-medium">Your SEO Score</Typography>
                    </Button>
                  </Grid>
                  <Grid class="flex justify-between mt-8 ">
                  <Button
                    class="border border-solid bg-slate-100 px-12 py-1.5  rounded-lg font-medium text-base text-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    class="border border-solid bg-slate-700 px-10 py-1.5   rounded-lg font-medium text-base text-slate-100"
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Dialog>
      </>
    );
  }
  
  export default DialogBoxCom;
  