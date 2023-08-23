import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DepartmentsDropdown = () => {
    const [expanded, setExpanded] = useState<boolean[]>([false, true])
    const [checked, setChecked] = useState<boolean[]>([false, false]);
    const [checked2, setChecked2] = useState<boolean[]>([false, false, false]);

    return (
        <div style={{ height: '300px', width: '70%', backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '20px', overflow: 'hidden', padding: '40px' }}>

            <div>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    {
                        expanded[0] ? <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} onClick={() => setExpanded([!expanded[0], expanded[1]])} /> :
                            <KeyboardArrowRightIcon sx={{ cursor: 'pointer' }} onClick={() => setExpanded([!expanded[0], expanded[1]])} />
                    }
                    <FormControlLabel
                        label="Customer Services"
                        control={
                            <Checkbox
                                checked={checked[0] && checked[1]}
                                onChange={(e) => setChecked([e.target.checked, e.target.checked])}
                            />
                        }
                    />
                </Box>
                <Box sx={{ display: `${expanded[0] ? 'flex' : 'none'}`, flexDirection: 'column', ml: 8 }}>
                    <FormControlLabel
                        label="Support"
                        control={<Checkbox checked={checked[0]} onChange={(e) => setChecked([e.target.checked, checked[1]])} />}
                    />
                    <FormControlLabel
                        label="Customer Success"
                        control={<Checkbox checked={checked[1]} onChange={(e) => setChecked([checked[0], e.target.checked])} />}
                    />
                </Box>
            </div>

            <div>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    {
                        expanded[1] ? <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} onClick={() => setExpanded([expanded[0], !expanded[1]])} /> :
                            <KeyboardArrowRightIcon sx={{ cursor: 'pointer' }} onClick={() => setExpanded([expanded[0], !expanded[1]])} />
                    }
                    <FormControlLabel
                        label="Design"
                        control={
                            <Checkbox
                                checked={checked2[0] && checked2[1] && checked2[2]}
                                onChange={(e) => setChecked2([e.target.checked, e.target.checked, e.target.checked])}
                            />
                        }
                    />
                </Box>
                <Box sx={{ display: `${expanded[1] ? 'flex' : 'none'}`, flexDirection: 'column', ml: 8 }}>
                    <FormControlLabel
                        label="Graphic Design"
                        control={<Checkbox checked={checked2[0]} onChange={(e) => setChecked2([e.target.checked, checked2[1], checked2[2]])} />}
                    />
                    <FormControlLabel
                        label="Product Design"
                        control={<Checkbox checked={checked2[1]} onChange={(e) => setChecked2([ checked2[0], e.target.checked, checked2[2]])} />}
                    />
                    <FormControlLabel
                        label="Web Design"
                        control={<Checkbox checked={checked2[2]} onChange={(e) => setChecked2([ checked2[0], checked2[1], e.target.checked])}/>}
                    />
                </Box>
            </div>

        </div>
    );
};

export default DepartmentsDropdown;