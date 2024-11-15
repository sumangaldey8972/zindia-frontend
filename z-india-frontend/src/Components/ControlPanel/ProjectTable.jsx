/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../../apiConfig/api';

const rows = [
    {
        id: 'INV-1234',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'O',
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
    },
    {
        id: 'INV-1233',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
    },
    {
        id: 'INV-1232',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'C',
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
    },
    {
        id: 'INV-1231',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'M',
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
    },
    {
        id: 'INV-1230',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'C',
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
    },
    {
        id: 'INV-1229',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'J',
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
    },
    {
        id: 'INV-1228',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'K',
            name: 'Krystal Stevens',
            email: 'k.stevens@email.com',
        },
    },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

// type Order = 'asc' | 'desc';

function getComparator(
    order,
    orderBy
) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function RowMenu() {
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="md" sx={{ minWidth: 140 }}>
                <MenuItem>Edit</MenuItem>
                <Divider />
                <MenuItem color="danger">Delete</MenuItem>
            </Menu>
        </Dropdown>
    );
}
export default function ProjectTabel() {
    const [order, setOrder] = React.useState('desc');
    const [selected, setSelected] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const [loading, setLoading] = React.useState(false)
    const [projects, setProjects] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false); // State for dialog
    const [selectedProject, setSelectedProject] = React.useState(null); // State for selected project to delete
    const navigate = useNavigate();


    React.useEffect(() => {
        setLoading(true)
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${base_url}/project`);

                console.log(response)
                if (response.data.status) {
                    setProjects(response.data.data || []);
                    setLoading(false)
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleEdit = (project) => {
        navigate("/add-item", { state: { project } });
    };

    const handleDelete = async (projectId) => {
        try {
            await axios.delete(`${base_url}/project/delete?project_id=${projectId}`);
            setProjects((prevProjects) =>
                prevProjects.filter((project) => project._id !== projectId)
            );
            console.log("Property Deleted Successfully");
        } catch (err) {
            console.log("Some error occurred while deleting a property");
        }
        setOpenDialog(false); // Close the dialog after deletion
    };

    const handleOpenDialog = (project) => {
        setSelectedProject(project);
        setOpenDialog(true); // Open the dialog
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // Close the dialog
        setSelectedProject(null); // Clear selected project
    };

    console.log(projects)

    return (
        <React.Fragment>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    // display: { xs: 'none', sm: 'initial' },
                    // display: { xs: 'none', sm: 'initial' },
                    width: '100%',
                    height: '60%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                        '--TableCell-fontSize': '80px',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: 140, padding: '12px 6px' }}>Project Name</th>
                            <th style={{ width: 140, padding: '12px 6px' }}>Area</th>
                            <th style={{ width: 140, padding: '12px 6px' }}>City</th>
                            <th style={{ width: 140, padding: '12px 6px' }}>Posession in</th>
                            <th style={{ width: 140, padding: '12px 6px' }}>Action</th>
                            {/* <th style={{ width: 140, padding: '12px 6px' }}> </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {[...rows].sort(getComparator(order, 'id')).map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <Typography level="title-md">Project Name</Typography>
                                </td>
                                <td>
                                    <Typography level="title-md">Area</Typography>
                                </td>
                                <td>
                                    <Typography level="title-md">Kolkata</Typography>
                                </td>
                                <td>
                                    <Typography level="title-md">14 Nov 2024</Typography>
                                </td>
                                <td>
                                    <RowMenu />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                    // display: {
                    //     xs: 'none',
                    //     md: 'flex',
                    // },
                    display: 'flex',
                }}
            >
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                    disabled
                >
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />
                {/* {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                    <IconButton
                        key={page}
                        size="sm"
                        variant={Number(page) ? 'outlined' : 'plain'}
                        color="neutral"
                    >
                        {page}
                    </IconButton>
                ))}
                <Box sx={{ flex: 1 }} /> */}
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                    disabled
                >
                    Next
                </Button>
            </Box>
        </React.Fragment>
    );
}
