import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Typography from '@mui/joy/Typography';

export default function Search() {
    const [search, setSearch] = React.useState('')
    return (
        <div>
            <Stack spacing={1} direction="row" sx={{ mb: 2, width: '40%' }}>
                <FormControl sx={{ flex: 1 }}>
                    <Input
                        placeholder="Search"
                        value={search}
                        startDecorator={<SearchRoundedIcon />}
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </FormControl>
                <Button variant="solid" color="primary" sx={{
                    backgroundColor: '#f45905'
                }} >
                    Search
                </Button>
            </Stack>
        </div>
    );
}
