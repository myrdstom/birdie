import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './eventStyles';

interface filterProps {
    visitId: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const FilterByVisitId: FC<filterProps> = ({ handleChange, visitId, handleKeyPress }) => {
    const classes = useStyles();

    return (
        <div>
            Please input your visitor ID to view a summary of your patient&apos;s event chart
            <br />
            <br />
            <TextField
                data-testid="required-textField"
                className={classes.textField}
                label="VisitID"
                name="VisitID"
                variant="outlined"
                value={visitId}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                inputProps={{ 'data-testid': 'input-visit-id' }}
            />
        </div>
    );
};

export default FilterByVisitId;
