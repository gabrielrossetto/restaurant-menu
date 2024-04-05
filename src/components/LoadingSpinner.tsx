import { CircularProgress } from '@mui/material';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress />
    </div>
  );
}

export default LoadingSpinner;
