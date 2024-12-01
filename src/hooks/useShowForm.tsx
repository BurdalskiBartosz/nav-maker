"use client";

import { useState } from "react";

export const useShowForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return {
    showForm,
    handleShowForm,
    handleHideForm,
  };
};
