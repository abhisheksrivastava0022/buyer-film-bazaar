// src/pages/BuyerForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import nophoto from "../assets/images/nophoto.gif"


import {

  POST_FILM_SUCCESS,

} from '../store/actions/authActionTypes';
import {
  Grid, FormControlLabel, Checkbox, FormControl, RadioGroup,
  FormLabel, Radio, Typography, InputLabel, MenuItem,
  FormGroup,
  Grid2
} from '@mui/material';

import { postFilm, patchFilm, fetchCountries, fetchLanguage } from '../store/actions/filmActions'; // Assuming patchFilm is the action for the PATCH request

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const BuyerFormDetails = () => {

  const dispatch = useDispatch();
  // State to track the current step (1 or 2)
  const [currentStep, setCurrentStep] = useState(1);
  const [filmId, setFilmId] = useState(null); // Store film ID after the POST request
  // const [errors, setErrors] = useState({});
  const countries = useSelector(state => state.films.countries.data); // Assuming you have this in your reducer
  const languages = useSelector(state => state.films.languages.data); // Assuming you have this in your reducer

  const [age, setAge] = React.useState('');

  const handleChangeTitle = (event) => {
    setAge(event.target.value);
  };


  useEffect(() => {
    dispatch(fetchCountries()); // Fetch countries when the component mounts
    dispatch(fetchLanguage());
  }, [dispatch]);


  const [formData, setFormData] = useState({

    title: '',
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    job_title: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country_id: "",
    phone: "",
    mobile: "",
    website: "",
    gstin: "",
    published_in_market_guide: "",
    activity: "",
  })

  const [errors, setErrors] = useState({});

  const validateValues = (inputValues) => {
    const errors = {};

    if (!inputValues.title.trim()) {
      errors.title = "Title is required";
    }

    if (!inputValues.first_name.trim()) {
      errors.first_name = "First name is required";
    }
    if (!inputValues.last_name.trim()) {
      errors.last_name = "Last name is required";
    }

    if (!inputValues.email.trim()) {
      errors.email = "email name is required";
    }
    if (!inputValues.company.trim()) {
      errors.company = "company name is required";
    }
    if (!inputValues.job_title.trim()) {
      errors.job_title = "Job title  is required";
    }
    if (!inputValues.address.trim()) {
      errors.address = "address is required";
    }
    if (!inputValues.city.trim()) {
      errors.city = "city is required";
    }
    if (!inputValues.zip.trim()) {
      errors.zip = "Zip is required";
    }
    if (!inputValues.state.trim()) {
      errors.state = "state is required";
    }
    if (!inputValues.country_id.trim()) {
      errors.country_id = "Country is required";
    }
    if (!inputValues.phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!inputValues.mobile.trim()) {
      errors.mobile = "Mobile is required";
    }
    if (!inputValues.website.trim()) {
      errors.website = "website is required";
    }
    if (!inputValues.gstin.trim()) {
      errors.gstin = "gstin is required";
    }
    if (!inputValues.published_in_market_guide.trim()) {
      errors.published_in_market_guide = "website is required";
    }
    if (!inputValues.activity.trim()) {
      errors.activity = "activity is required";
    }

    console.log("Validation Errors:", errors); // Debugging line

    return errors;
  };



  const handleChange = (event) => {
    const { name, value } = event.target;

   
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

   
    setErrors((prevErrors) => {
      if (value.trim() === "") {
        return { ...prevErrors, [name]: `${name.replace('_', ' ')} is required` };
      } else {
        const { [name]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      }
    });
  };



  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({ ...formData, [name]: value });
  // };






  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev,
  //      [name]: value
  //      }));
  // };

  // const handleStep1Submit = async (e) => {
  //   e.preventDefault();


  //   const formErrors = validateValues(formData);
  //   setErrors(formErrors);

  //   const step1Errors = validateStep1(values); // Validate Step 1
  //   if (Object.keys(step1Errors).length > 0) {
  //     setErrors(step1Errors);
  //     return;
  //   }
  //   try {
  //     const filmId = await dispatch(postFilm(values));
  //     if (filmId) {
  //       setFilmId(filmId);
  //       setCurrentStep(2); // Move to Step 2 if Step 1 is valid
  //     }
  //   } catch (error) {
  //     console.error("Failed to create film:", error.message);
  //   }
  // };

  // Validation Function
  // const validateStep1 = (values) => {
  //   const errors = {};

  //   if (!values.title.trim()) {
  //     errors.title = 'Title is required ';
  //   }


  //   if (!values.first_name.trim()) {
  //     errors.first_name = 'First name is required ';
  //   }

  //   if (!values.last_name.trim()) {
  //     errors.last_name = 'Last name is required ';
  //   }

  //   if (!values.email.trim) {
  //     errors.email = 'Email is required'
  //   }

  //   if (!values.company.trim()) {
  //     errors.company = 'Company name is required'
  //   }

  //   if (!values.job_title.trim()) {
  //     errors.job_title = 'Job title is required'
  //   }

  //   if (!values.address.trim()) {
  //     errors.address = 'Address is required'
  //   }

  //   if (!values.city.trim()) {
  //     errors.city = 'City is required'
  //   }

  //   if (!values.zip.trim()) {
  //     errors.zip = 'Zip is required'
  //   }

  //   if (!values.state.trim()) {
  //     errors.state = 'State is required'
  //   }

  //   if (!values.country_id.trim()) {
  //     errors.country_id = 'Country is required'
  //   }


  //   if (!values.phone.trim()) {
  //     errors.phone = 'Phone is required'
  //   }


  //   if (!values.mobile.trim()) {
  //     errors.mobile = 'Mobile is required'
  //   }


  //   if (!values.website.trim()) {
  //     errors.website = 'Website is required'
  //   }


  //   if (!values.gstin.trim()) {
  //     errors.gstin = 'GST is required'
  //   }

  //   if (!values.published_in_market_guide.trim()) {
  //     errors.published_in_market_guide = 'Select one option'
  //   }

  //   if (!values.activity.trim()) {
  //     errors.activity = 'Select any activity'
  //   }

  //   if (!values.company_name.trim()) {
  //     errors.company_name = 'Company name is required ';
  //   }

  //   if (!values.job_title.trim()) {
  //     errors.job_title = 'Job title is required ';
  //   }

  //   if (!values.address.trim()) {
  //     errors.address = 'Address is required ';
  //   }

  //   if (!values.city.trim()) {
  //     errors.city = 'City is required ';
  //   }

  //   if (!values.zip_code.trim()) {
  //     errors.zip_code = 'Zip code is required ';
  //   }

  //   if (!values.state.trim()) {
  //     errors.state = 'State is required ';
  //   }


  //   if (!values.email_id.trim()) {
  //     errors.email_id = 'Email ID is required ';
  //   }

  //   if (!values.phone_number.trim()) {
  //     errors.phone_number = 'Phone number is required ';
  //   }

  //   if (!values.mobile_number.trim()) {
  //     errors.mobile_number = 'Mobile number is required ';
  //   }

  //   if (!values.company_website.trim()) {
  //     errors.company_website = 'Company website is required ';
  //   }

  //   if (!values.gst_number.trim()) {
  //     errors.gst_number = 'GST number is required ';
  //   }


  //   if (!values.english_title.trim()) {
  //     errors.english_title = 'English Title is required ';
  //   }
  //   // if (!values.lead_cast.trim()) {
  //   //   errors.lead_cast = 'English Title is  ';
  //   // }
  //   // if (!values.production_design.trim()) {
  //   //   errors.production_design = 'English Title is  ';
  //   // }
  //   // if (!values.costume.trim()) {
  //   //   errors.costume = 'English Title is  ';
  //   // }

  //   // if (!values.writer.trim()) {
  //   //   errors.writer = 'Writer is  ';
  //   // }

  //   // if (!values.director_of_photography.trim()) {
  //   //   errors.director_of_photography = 'Director of Photography is  ';
  //   // }

  //   // if (!values.editor.trim()) {
  //   //   errors.editor = 'Editor is  ';
  //   // }

  //   // if (!values.editor_filmography.trim()) {
  //   //   errors.editor_filmography = "Editor’s Filmography is  ";
  //   // }
  //   if (!values.duration.trim()) {
  //     errors.duration = 'Final Duration is required';
  //   }
  //   if (!values.month_of_completion || values.month_of_completion.trim() === '') {
  //     errors.month_of_completion = 'Completion month is required  ';
  //   }

  //   if (!values.year_of_completion || values.year_of_completion.trim() === '') {
  //     errors.year_of_completion = 'Completion year is required';
  //   }


  //   // if (!values.synopsis.trim()) {
  //   //   errors.synopsis = 'Synopsis of Film is  ';
  //   // }

  //   // if (!values.director_comment.trim()) {
  //   //   errors.director_comment = "Director's Note is  ";
  //   // }

  //   // // if (!values.screenplay.trim()) {
  //   // //   errors.screenplay = 'Screenplay is  ';
  //   // // }
  //   // if (!values.additional_crew.trim()) {
  //   //   errors.additional_crew = 'Screenplay is  ';
  //   // }

  //   // if (!values.print_format.trim()) {
  //   //   errors.print_format = 'Print Format is  ';
  //   // }

  //   // if (!values.aspect_ratio.trim()) {
  //   //   errors.aspect_ratio = 'Aspect Ratio is  ';
  //   // }
  //   // if (!values.sound.trim()) {
  //   //   errors.sound = 'Sound Format is  ';
  //   // }
  //   // if (!values.sound_format.trim()) {
  //   //   errors.sound_format = 'Sound Format is  ';
  //   // }
  //   // if (!values.music.trim()) {
  //   //   errors.music = 'Sound Format is  ';
  //   // }

  //   return errors;
  // };
  // const validateStep2 = (values) => {
  //   const errors = {};


  //   if (!values.synopsis) {
  //     errors.synopsis = 'Month of completion is required.';
  //   }

  //   if (!values.print_format) {
  //     errors.print_format = 'Year of completion is required.';
  //   }

  //   if (!values.director_comment) {
  //     errors.director_comment = 'Director comment is required.';
  //   }

  //   return errors;
  // };

  // const { values, handleChange } = useForm(
  //   {
  //     title: '',
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     company: "",
  //     job_title: "",
  //     address: "",
  //     city: "",
  //     zip: "",
  //     state: "",
  //     country_id: "",
  //     phone: "",
  //     mobile: "",
  //     website: "",
  //     gstin: "",
  //     published_in_market_guide: "",
  //     activity: "",

  //     // company_name: "",
  //     // job_title: "",
  //     // address: "",
  //     // city: "",
  //     // zip_code: "",
  //     // state: "",
  //     // email_id: "",
  //     // phone_number: "",
  //     // mobile_number: "",
  //     // company_website: "",
  //     // gst_number: "",


  //     // english_title: '',
  //     language_id: 1, // default language, adjust if needed
  //     // is_film_complete: '', // Initializing as 0 (unchecked)
  //     // duration: '',
  //     // month_of_completion: '',
  //     // year_of_completion: '',
  //     // director_comment: '',
  //     country: [], // Set as array for multiple selection
  //     language: [], // Set as array for multiple selection
  //     // print_format: '',
  //     // aspect_ratio: '',
  //     // sound_format: '',
  //     // lead_cast: '',
  //     // writer: '',
  //     // director_of_photography: '',
  //     // editor: '',
  //     // editor_filmography: '',
  //     // sound: '',
  //     // music: '',
  //     // production_design: '',
  //     // costume: '',
  //     // additional_crew: '',
  //     // download_preview_link: '',
  //     // preview_link_password: '',
  //     // note: '', // End parameter for backend
  //   },
  //   // Ensure the validation function handles integer-based values for checkboxes
  // );




  // Step 1 submit handler
  // const handleStep1Submit = async (e) => {
  //   e.preventDefault();

  //   const formErrors = validateValues(formData);
  //   setErrors(formErrors);

  //   // Check if there are any errors
  //   if (Object.keys(formErrors).length > 0) {
  //     // There are validation errors, do not submit the form
  //     return;
  //   }

  //   const step1Errors = validateStep1(values); // Validate Step 1
  //   if (Object.keys(step1Errors).length > 0) {
  //     setErrors(step1Errors);
  //     return;
  //   }
  //   try {
  //     const filmId = await dispatch(postFilm(values));
  //     if (filmId) {
  //       setFilmId(filmId);
  //       setCurrentStep(2); // Move to Step 2 if Step 1 is valid
  //     }
  //   } catch (error) {
  //     console.error("Failed to create film:", error.message);
  //   }
  // };

  const handleStep1Submit = async (e) => {
    e.preventDefault();

    const formErrors = validateValues(formData);
    setErrors(formErrors);

    // Check if there are any errors
    if (Object.keys(formErrors).length > 0) {
      // There are validation errors, do not submit the form
      return;
    }

    try {
      const filmId = await dispatch(postFilm(formData));
      if (filmId) {
        setFilmId(filmId);
        setCurrentStep(2); // Move to Step 2 if Step 1 is valid
      }
    } catch (error) {
      console.error("Failed to create film:", error.message);
    }
  };


  // // Step 2 submit handler
  // const handleStep2Submit = async (e) => {
  //   e.preventDefault();
  //   const step2Errors = validateStep2(values); // Validate Step 2
  //   if (Object.keys(step2Errors).length > 0) {
  //     setErrors(step2Errors);
  //     return;
  //   }
  //   if (filmId) {
  //     const response = await dispatch(patchFilm(filmId, values));
  //     if (response.type === 'PATCH_FILM_SUCCESS') {
  //       console.log('Film updated successfully!');
  //     } else {
  //       console.error('Failed to update film:', response.payload);
  //     }
  //   } else {
  //     console.error('No film ID available for updating.');
  //   }
  // };


  // // Handler for checkbox change
  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   handleChange({ target: { name, value: checked } });
  // };










  // const [photoUrl, setPhotoUrl] = useState(nophoto); // Default image URL
  // const [open, setOpen] = useState(false); // Modal open state
  // const [photoInputValue, setPhotoInputValue] = useState(''); // Store file input value


  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleDeleteClick = () => {
  //   setPhotoUrl(nophoto);
  //   setPhotoInputValue('');
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPhotoUrl(reader.result); // Set the image URL to state
  //       setPhotoInputValue(file.name); // Store the file name (optional)
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };






  // const handleSavePhoto = () => {
  //   if (selectedFile) {
  //     const uploadedPhotoUrl = URL.createObjectURL(selectedFile); // Temporarily use object URL for preview
  //     handleSave(uploadedPhotoUrl); // Pass the uploaded URL to the parent component
  //     handleClose();
  //   }
  // };

  // // const handleSavePhoto = () => {
  // //   if (selectedFile) {
  // //     const uploadedPhotoUrl = URL.createObjectURL(selectedFile); // Temporarily use object URL for preview
  // //     console.log("Saving photo: ", uploadedPhotoUrl); // Debug log
  // //     handleSave(uploadedPhotoUrl); // Pass the uploaded URL to the parent component
  // //     handleClose(); // Close the modal after saving the photo
  // //   } else {
  // //     console.log("No file selected"); // Debug log
  // //   }
  // // };

  const genres = [
    'Buyer',
    'Distributors',
    'Film Festivals',
    'Film Commission',
    'Filming Funds',
    'Film Market',
    'Gap Financiers / Investors',
    'Publicity & Marketing',
    'Production Companies',
    'Sales Agents',
    'Technical',
    'Theatrical Exhibitions',
    'VOD Platform',
    'Others',
  ];



  return (
    <>

      <Grid container>
        <Grid item xs={2} sm={2} md={2} lg={2}>

        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography style={{ textAlign: "center", marginTop: "15px" }} variant="h5" gutterBottom>All fields marked in <span style={{ color: "red" }}>'*'</span> are mandatory.</Typography>
              {/* <form style={{ maxWidth: '900px', margin: '3rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}> */}
              <form style={{ maxWidth: '100%', margin: '3rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                {/* <Typography variant="h5" gutterBottom>Film Information</Typography> */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h5" gutterBottom>Personal Information</Typography>
                  </Grid>
                </Grid>


                {/* Step 1 fields */}
                {currentStep === 1 && (
                  <>
                    {/* Title */}

                    {/* <Grid container spacing={1} style={{ marginTop: "5px" }}>
                        <Grid item xs={6} sm={6} md={6} lg={6} style={{ display: "flex", alignItems: "center" }}>
                          <FormControl fullWidth>
                            <InputLabel id="countries-label">Please select title</InputLabel>
                            <Select
                              labelId="countries-label"
                              name="title"
                              multiple
                              value={formData.title || []}
                              onChange={handleChange}
                              label="Please select title"

                              renderValue={(selected) => selected.map((id) => {
                                const selectedCountry = countries.find(country => country.id === id);
                                return selectedCountry ? selectedCountry.name : '';
                              }).join(', ')}
                            >
                              {countries && countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                  {country.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
                      </Grid> */}


                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                        {errors.first_name && (
                          <p className="error text-danger">
                            {errors.first_name}
                          </p>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                        {errors.last_name && (
                          <p className="error text-danger">
                            {errors.last_name}
                          </p>
                        )}
                      </Grid>
                    </Grid>




                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Company Name"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}

                         
                        />
                         {errors.company && (
                          <p className="error text-danger">
                            {errors.company}
                          </p>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>

                        <TextField
                          fullWidth
                          label="Job Title"
                          type="text"
                          name="job_title"
                          value={formData.job_title}
                          onChange={handleChange}
                          placeholder="Job Title"
                          // error={!!errors.job_title}
                          // helperText={errors.job_title}
                        />
                         {errors.job_title && (
                          <p className="error text-danger">
                            {errors.job_title}
                          </p>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          multiline
                          rows={4}
                          // error={!!errors.address}
                          // helperText={errors.address}
                        />
                        {errors.address && (
                          <p className="error text-danger">
                            {errors.address}
                          </p>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="City"
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}

                         
                        />
                        {errors.city && (
                          <p className="error text-danger">
                            {errors.city}
                          </p>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="ZIP"
                          type="number"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}

                          // error={!!errors.zip}
                          // helperText={errors.zip}
                        />
                         {errors.zip && (
                          <p className="error text-danger">
                            {errors.zip}
                          </p>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="State"
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}

                          // error={!!errors.state}
                          // helperText={errors.state}
                        />
                        {errors.state && (
                          <p className="error text-danger">
                            {errors.state}
                          </p>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <FormControl fullWidth>
                          <InputLabel id="countries-label">Please select country</InputLabel>
                          <Select
                            labelId="countries-label"
                            name="country_id"
                            multiple
                            value={formData.country_id || []}
                            onChange={handleChange}
                            label="Country"
                            // error={!!errors.country_id}
                            // helperText={errors.country_id}
                            renderValue={(selected) => selected.map((id) => {
                              const selectedCountry = countries.find(country => country.id === id);
                              return selectedCountry ? selectedCountry.name : '';
                            }).join(', ')}
                          >
                            {countries && countries.map((country) => (
                              <MenuItem key={country.id} value={country.id}>
                                {country.name}
                              </MenuItem>
                            ))}
                          </Select>
                          {errors.country_id && (
                          <p className="error text-danger">
                            {errors.country_id}
                          </p>
                        )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          // error={!!errors.email}
                          // helperText={errors.email}
                        />
                         {errors.email && (
                          <p className="error text-danger">
                            {errors.email}
                          </p>
                        )}
                      </Grid>
                    </Grid>


                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Phone"
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          // error={!!errors.phone}
                          // helperText={errors.phone}
                        />
                         {errors.phone && (
                          <p className="error text-danger">
                            {errors.phone}
                          </p>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Mobile"
                          type="text"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Mobile"
                          // error={!!errors.mobile}
                          // helperText={errors.mobile}
                        />
                         {errors.mobile && (
                          <p className="error text-danger">
                            {errors.mobile}
                          </p>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="Company Website"
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="Company Website"
                          // error={!!errors.website}
                          // helperText={errors.website}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          fullWidth
                          label="GSTIN"
                          type="text"
                          name="gstin"
                          value={formData.gstin}
                          onChange={handleChange}
                          placeholder="GSTIN"
                          // error={!!errors.gstin}
                          // helperText={errors.gstin}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                      <Grid item xs={12} sm={12} md={12} lg={12} style={{ textAlign: "center", width: "10px" }}>
                        <Grid container spacing={1}>
                          <Grid item xs={4} sm={4} md={4} lg={4}>

                          </Grid>
                          <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Button onClick={handleStep1Submit}>Submit Step 1</Button>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4} lg={4}>

                          </Grid>
                        </Grid>

                      </Grid>
                    </Grid>

                  </>
                )}


                {currentStep === 2 && (

                  <>

                    <Grid container spacing={2} style={{ marginTop: "15px" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h1>Photo</h1>
                      </Grid>
                    </Grid>


                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography style={{ marginTop: "15px" }}>Photo for catalogues (Size - 2x2 inch, Resolution - 72dpi)</Typography>
                      </Grid>

                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography style={{ marginTop: "15px" }}>Medium Close up/ Close up photo of yourself in jpg format (no larger than 1024 kb).
                          Front profile | Individual portrait | Properly exposed colour photograph
                        </Typography>
                      </Grid>
                    </Grid>




                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="form-group" style={{ display: "flex", justifyContent: "space-between" }}>
                          <label className="control-label" htmlFor="PHOTO_URL">
                            Photo:<span style={{ color: 'red' }}> *</span>
                          </label>
                          <div>
                            <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                              <div className="row">
                                <div className="col-md-12" style={{ paddingRight: '0px' }}>
                                  <img
                                    id="imgPhoto"
                                    src={photoUrl}
                                    style={{ cursor: "pointer" }}
                                    onError={() => {
                                      setPhotoUrl('/images/nophoto.gif');
                                      setPhotoInputValue('');
                                    }}
                                    alt="Uploaded"
                                    onClick={handleClickOpen}
                                  />
                                  <br />
                                  <div id="myCroppic">

                                  </div>

                                  <span
                                    id="btnUploadPhoto"
                                    className="span-link"
                                    style={{ marginTop: '10px', display: 'inline-block' }}

                                    onClick={handleClickOpen}
                                  >
                                    UPLOAD
                                  </span>
                                  |
                                  <span
                                    id="btnDelete"
                                    className="span-link"
                                    style={{ marginTop: '10px', display: 'inline-block' }}
                                    onClick={handleDeleteClick}
                                  >
                                    REMOVE
                                  </span>

                                  <table id="PHOTO_URL_ET" className="dxeValidDynEditorTable" style={{ width: '100%' }}>
                                    <tbody>
                                      <tr>
                                        <td style={{ width: '100%' }}>
                                          <input
                                            type="hidden"
                                            name="PHOTO_URL$State"
                                            id="PHOTO_URL_State"
                                            value={'{"validationState": ""}'}
                                          />
                                          <input
                                            className="dxeTextBoxSys form-control transparent dxeTextBoxDefaultWidthSys"
                                            data-val-required="Photo is required"
                                            data-val="true"
                                            id="PHOTO_URL"
                                            type="text"
                                            value={photoInputValue}
                                            name="PHOTO_URL"
                                            onChange={(e) => setPhotoInputValue(e.target.value)}
                                            style={{
                                              borderWidth: '0px',
                                              width: '100%',
                                              borderBottomColor: '#D8D8D8',
                                              borderBottomStyle: 'Solid',
                                              borderBottomWidth: '1px',
                                            }}
                                          />
                                        </td>
                                      </tr>
                                      <tr style={{ display: 'none' }}>
                                        <td className="dxeErrorFrameSys dxeErrorCellSys dxeNoBorderTop" style={{ fontSize: '12px' }}>
                                          Invalid value
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span className="field-validation-valid text-danger" data-valmsg-for="PHOTO_URL" data-valmsg-replace="true"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>




                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h1 style={{ marginTop: "15px" }}>Market Guide Profile</h1>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography>Do you want your personal information published in the Market Guide? <span style={{ color: "red" }}>*</span></Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{ display: "flex" }}>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="published_in_market_guide"
                              id="published_in_market_guide_no"
                              value="0"
                              checked={formData.published_in_market_guide === 0 || formData.published_in_market_guide === "0"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="published_in_market_guide_no">
                              No
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="published_in_market_guide"
                              id="published_in_market_guide_yes"
                              value="1"
                              checked={formData.published_in_market_guide == 1 || formData.published_in_market_guide == "1"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="published_in_market_guide_yes">
                              Yes
                            </label>
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <h1>Company Profile</h1>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <ul>
                          <li>
                            If you are representing <strong>a Company/Organisation/Institution</strong>, please provide a brief description and select the main activity for the same.
                          </li>
                          <li>If you are <strong>not associated</strong> with a Company/Organisation/Institution, please provide a brief description about your profession and select your main activity.</li>
                        </ul>
                      </Grid>
                    </Grid>




                    <Grid container spacing={2}>

                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Typography>Profile: <span style={{ color: "red" }}>*</span></Typography>
                        <span><i>(max. 1500 characters</i>)</span>
                      </Grid>

                      <Grid item xs={9} sm={9} md={9} lg={9}>
                        <Typography variant="h5" gutterBottom>Characters remaining : 1500.</Typography>
                        <TextField
                          fullWidth
                          label="Synopsis of Film"
                          name="synopsis"
                          value={formData.synopsis || ''}
                          onChange={handleChange}
                          placeholder="Synopsis of Film"
                          multiline
                          rows={8}
                          className='custom-label'
                        />
                        {errors.synopsis && <p style={{ color: 'red' }}>{errors.synopsis}</p>}
                      </Grid>

                    </Grid>




                    <Grid container spacing={2} style={{ marginTop: "15px" }}>
                      <Grid item xs={2} sm={2} md={2} lg={2} style={{ display: "flex", alignItems: "center" }}>
                        <label>Activity: <span style={{ color: "red" }}>*</span></label>
                      </Grid>
                      <Grid item xs={10} sm={10} md={10} lg={10}>
                        <FormControl fullWidth>
                          <InputLabel id="countries-label">Please select</InputLabel>
                          <Select
                            labelId="countries-label"
                            name="activity"
                            multiple
                            value={formData.activity || []}
                            onChange={handleChange}
                            label="activity"
                            error={!!errors.activity}
                            helperText={errors.activity}
                            renderValue={(selected) => selected.map((id) => {
                              const selectedCountry = countries.find(country => country.id === id);
                              return selectedCountry ? selectedCountry.name : '';
                            }).join(', ')}
                          >
                            {countries && countries.map((country) => (
                              <MenuItem key={country.id} value={country.id}>
                                {country.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                    </Grid>





                    <Grid container spacing={2} style={{ marginTop: "15px" }}>

                      <Grid item xs={4} sm={4} md={4} lg={4}>

                        <Typography>What are you looking for at Film Bazaar?
                        </Typography>
                      </Grid>




                      <Grid item xs={8} sm={8} md={8} lg={8} style={{ border: "1px solid black" }}>
                        <FormControl component="fieldset" fullWidth>

                          <FormGroup
                            sx={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gap: '8px',
                            }}
                          >
                            {genres.map((genre) => (
                              <FormControlLabel
                                key={genre}
                                control={<Checkbox />}
                                label={genre}
                                sx={{
                                  '& .MuiSvgIcon-root': {
                                    display: 'none',
                                  },
                                }}
                              />
                            ))}
                          </FormGroup>
                        </FormControl>
                      </Grid>

                    </Grid>

                    <Grid container spacing={2} style={{ marginTop: "15px" }}>
                      <Grid item xs={4} sm={4} md={4} lg={4}>

                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Button onClick={handleStep2Submit}>Final Submit Step 2</Button>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                      </Grid>
                    </Grid>
                  </>
                )}
              </form>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      </Grid>

      {/* <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Photo Upload
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Upload the file or use the webcam to capture your picture.
            </Typography>
          </DialogContent>
          <DialogContent dividers>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              CLOSE
            </Button>
            <Button autoFocus onClick={handleSavePhoto}>
              SAVE PHOTO
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment> */}
    </>


  );
};








export default BuyerFormDetails;
