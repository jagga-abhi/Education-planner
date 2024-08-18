import React, { useState } from 'react';
import { Select, Input, Button, Stack } from '@chakra-ui/react';

const Search = () => {

  return (

        <Stack className='mt-8'> 
        <Stack direction={"row"}>
             <Select
                            id="dropdown"
                            bg={"#0F2167"}
                            placeholder="Select Country"
                          >
                            <option value="option1">Canada</option>
                            <option value="option2">America</option>
                            <option value="option3">Australia</option>
                          </Select>
         <Input bg={"#0F2167"} type='text' placeholder='Program Search' />
        </Stack>
        
          <Button bg={"#0F2167"} _hover= "#B6BBC4" variant={"solid"}>Search</Button>
        </Stack>
       
       
  );
};

export default Search;