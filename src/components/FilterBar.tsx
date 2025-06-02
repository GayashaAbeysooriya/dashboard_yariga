"use client";

import { useState } from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import { Tune, Search } from "@mui/icons-material";

const FilterBar = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Any Status");
  const [type, setType] = useState("Any Type");
  const [country, setCountry] = useState("All Countries");
  const [state, setState] = useState("All States");

  const statusOptions = ["Any Status", "For Sale", "For Rent"];
  const typeOptions = ["Any Type", "House", "Apartment", "Condo"];
  const countryOptions = ["All Countries", "USA", "Canada", "UK"];
  const stateOptions = ["All States", "California", "Texas", "Florida"];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-4 items-center w-full">
        {/* Search Input */}
        <div className="flex items-center gap-2 border rounded-md px-3 py-1 bg-gray-50 flex-grow min-w-[200px]">
          <Search fontSize="small" className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter an address, city or Zip code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none text-sm bg-transparent w-full"
          />
        </div>

        {/* Dropdown Filters */}
        <TextField
          select
          size="small"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="min-w-[140px] bg-gray-50 rounded-md"
        >
          {statusOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        <TextField
          select
          size="small"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="min-w-[140px] bg-gray-50 rounded-md"
        >
          {typeOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        <TextField
          select
          size="small"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="min-w-[140px] bg-gray-50 rounded-md"
        >
          {countryOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        <TextField
          select
          size="small"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="min-w-[140px] bg-gray-50 rounded-md"
        >
          {stateOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        {/* More Button */}
        <IconButton className="bg-gray-100" aria-label="more filters">
          <Tune className="text-gray-600" />
        </IconButton>
      </div>
    </div>
  );
};

export default FilterBar;
