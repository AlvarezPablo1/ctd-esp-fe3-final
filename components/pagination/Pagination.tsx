import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({currentPage,totalPages,onChange}) => {

  return (
    <Stack spacing={2} sx={{display: "flex", alignItems: "center", marginBottom: "3rem"}}>
      <Pagination count={totalPages} page={currentPage} onChange={onChange} variant="outlined"  
      sx={{ 
        backgroundColor:"white",
        }}/>
    </Stack>
  );
};

export default CustomPagination;
