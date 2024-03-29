import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const steps = ["Datos personales", "Dirección de entrega", "Datos del pago"];

const schema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  surname: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("Formato de correo inválido")
    .required("El correo es requerido"),
  direccionNumero: yup.string().required("La direccion y numero es requerida"),
  derp: yup.string(),
  city: yup.string().required("La ciudad es requerido"),
  state: yup.string().required("La provincia es requerido"),
  codPostal: yup.number().required("El codigo postal es requerido"),
  nameTarjet: yup
    .string()
    .required("El nombre como aparece en la tarjeta es requerido"),
  numTarjet: yup.string().required("El número de tarjeta es requerido"),
  exp: yup.string().required("El Exp MM/YY es requerido"),
  cvv: yup.number().required("El CVV es requerido"),
});

const StepContent1: React.FC<any> = ({ control }) => (
  <Box
    sx={{
      height: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Controller
      control={control}
      name="name"
      defaultValue=""
      rules={{ required: "El nombre es requerido" }}
      render={({ field, fieldState }) => (
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Controller
      control={control}
      name="surname"
      defaultValue=""
      rules={{ required: "El apellido es requerido" }}
      render={({ field, fieldState }) => (
        <TextField
          id="surname"
          label="Apellido"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Controller
      control={control}
      name="email"
      defaultValue=""
      rules={{ required: "El mail es requerido" }}
      render={({ field, fieldState }) => (
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
  </Box>
);

const StepContent2: React.FC<any> = ({ control }) => (
  <Box
    sx={{
      height: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Controller
      control={control}
      name="direccionNumero"
      defaultValue=""
      render={({ field, fieldState }) => (
        <TextField
          id="direccionNumero"
          label="Dirección y Número"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Controller
      control={control}
      name="derp"
      defaultValue=""
      render={({ field, fieldState }) => (
        <TextField
          id="derp"
          label="Departamento, piso, etc"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Controller
      control={control}
      name="city"
      defaultValue=""
      render={({ field, fieldState }) => (
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Box
      sx={{ width: "95%", display: "flex", justifyContent: "space-between" }}
    >
      <Controller
        control={control}
        name="state"
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            id="state"
            label="Provincia"
            variant="outlined"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
            sx={{
              width: "95%",
              background:"aliceblue",
              borderRadius: "4px",
              "&:hover": {
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff9f59!important",
                }
              },
            }}
  
          />
        )}
      />
      <Controller
        control={control}
        name="codPostal"
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            id="codPostal"
            label="Cod Postal"
            variant="outlined"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
            sx={{
              width: "95%",
              background:"aliceblue",
              borderRadius: "4px",
              "&:hover": {
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff9f59!important",
                }
              },
            }}
  
          />
        )}
      />
    </Box>
  </Box>
);

const StepContent3: React.FC<any> = ({ control }) => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Controller
      control={control}
      name="nameTarjet"
      defaultValue=""
      rules={{ required: "El nombre como aparece en la tarjeta es requerido" }}
      render={({ field, fieldState }) => (
        <TextField
          id="nameTarjet"
          label="Nombre como aparece en la tarjeta"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Controller
      control={control}
      name="numTarjet"
      defaultValue=""
      rules={{ required: "El número de tarjeta es requerido" }}
      render={({ field, fieldState }) => (
        <TextField
          id="numTarjet"
          label="Número de tarjeta"
          variant="outlined"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          sx={{
            width: "95%",
            background:"aliceblue",
            borderRadius: "4px",
            "&:hover": {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9f59!important",
              }
            },
          }}

        />
      )}
    />
    <Box
      sx={{ width: "95%", display: "flex", justifyContent: "space-between" }}
    >
      <Controller
        control={control}
        name="exp"
        defaultValue=""
        rules={{ required: "El Exp MM/YY es requerido" }}
        render={({ field, fieldState }) => (
          <TextField
            id="exp"
            label="Exp MM/YY"
            variant="outlined"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
            sx={{
              width: "95%",
              background:"aliceblue",
              borderRadius: "4px",
              "&:hover": {
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff9f59!important",
                }
              },
            }}
  
          />
        )}
      />
      <Controller
        control={control}
        name="cvv"
        defaultValue=""
        rules={{ required: "El CVV es requerido" }}
        render={({ field, fieldState }) => (
          <TextField
            id="cvv"
            label="CVV"
            variant="outlined"
            type="password"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
            sx={{
              width: "95%",
              background:"aliceblue",
              borderRadius: "4px",
              "&:hover": {
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff9f59!important",
                }
              },
            }}
  
          />
        )}
      />
    </Box>
  </Box>
);

type FormValues = {
  name: string;
  surname: string;
  email: string;
  direccionNumero: string;
  derp?: string;
  city: string;
  state: string;
  codPostal: number;
  nameTarjet: string;
  numTarjet: string;
  exp: string;
  cvv: number;
};

interface Comic {
  id: number;
  title: string;
  thumbnail: Image;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}

const StepperComp: React.FC<Comic> = ({ id, title, thumbnail, price }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const { handleSubmit, control, trigger, watch } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Form data:", data);

    const formattedData1 = {
      customer: {
        name: watch().name,
        lastname: watch().surname,
        email: watch().email,
        address: {
          address1: watch().direccionNumero,
          address2: watch().derp,
          city: watch().city,
          state: watch().state,
          zipCode: watch().codPostal,
        },
      },
      card: {
        number: watch().numTarjet.replace(" ", ""),
        cvc: watch().cvv,
        expDate: watch().exp,
        nameOnCard: watch().nameTarjet,
      },
      order: {
        name: title,
        image: thumbnail.path + ".jpg",
        price: price,
      },
    };

    const isValid = await trigger();

    if (isValid) {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData1),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error al procesar la solicitud:", errorData);
          setAlertMessage(errorData.message);
          setOpen(true);
          return;
        }
        const formattedData = {
          customer: {
            name: watch().name,
            lastname: watch().surname,
            email: watch().email,
            address: {
              address1: watch().direccionNumero,
              address2: watch().derp,
              city: watch().city,
              state: watch().state,
              zipCode: watch().codPostal,
            },
          },
          card: {
            number: watch().numTarjet.replace(" ", ""),
            cvc: watch().cvv,
            expDate: watch().exp,
            nameOnCard: watch().nameTarjet,
          },
          order: {
            name: title,
            image: thumbnail.path + ".jpg",
            price: price,
          },
        };

        localStorage.setItem(
          "formattedFormData",
          JSON.stringify(formattedData)
        );
        window.location.href = `/confirmacion-compra/${id}`;
      } catch (error) {
        console.error("Error al procesar la solicitud:", error);
      }
    } else {
      console.error(
        "Hay errores en el formulario. No se realizará la redirección."
      );
    }
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    console.error("Errores de validación:", errors);
  };

  const handleNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    let isValid = false;

    switch (activeStep) {
      case 0:
        isValid = await trigger(["name", "surname", "email"]);
        break;
      case 1:
        isValid = await trigger([
          "direccionNumero",
          "city",
          "derp",
          "state",
          "codPostal",
        ]);
        break;
      case 2:
        isValid = await trigger(["nameTarjet", "numTarjet", "exp", "cvv"]);
        break;
    }

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      if (activeStep === steps.length - 1) {
        handleSubmit(onSubmit, onError)();
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: {xs: "100%", sm: "70%"},
        height: "600px",
        display: "flex",
        flexDirection: "column",
        marginBottom: {xs: "70px", sm: "0px"}
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <Typography sx={{ color: "white" }}>{label}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Typography
          variant="h5"
          sx={{ mt: 2, mb: 1, color: "#ff9f59", marginLeft: "20px" }}
        >
          {activeStep === 0 && `Datos personales`}
          {activeStep === 1 && `Dirección de entrega`}
          {activeStep === 2 && `Datos del pago`}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit, onError)}
          sx={{
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {activeStep === 0 && <StepContent1 control={control} />}
          {activeStep === 1 && <StepContent2 control={control} />}
          {activeStep === 2 && <StepContent3 control={control} />}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              height: "20%",
              alignItems: "flex-end",
            }}
          >
            <Button disabled={activeStep === 0} onClick={handleBack} sx={{
                backgroundColor: '#ff9f59',
                width: '150px',
                color: 'black',
                "&:hover": {
                  backgroundColor: '#82502c',
                  color: 'aliceblue',
                },
              }}>
              Atras
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <>
              <Button type="submit" onClick={handleSubmit(onSubmit, onError)} sx={{
                backgroundColor: '#ff9f59',
                width: '150px',
                color: 'black',
                "&:hover": {
                  backgroundColor: '#82502c',
                  color: 'aliceblue',
                },
              }}>
                Comprar
              </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {alertMessage}
                  </Alert>
                </Snackbar>
              </>
            ) : (
              <Button type="button" onClick={handleNext} sx={{
                backgroundColor: '#ff9f59',
                width: '150px',
                color: 'black',
                "&:hover": {
                  backgroundColor: '#82502c',
                  color: 'aliceblue',
                },
              }}>
                Siguiente
              </Button>
            )}
          </Box>
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default StepperComp;