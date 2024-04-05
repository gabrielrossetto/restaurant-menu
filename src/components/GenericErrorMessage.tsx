function GenericErrorMessage({ errorMessage }: { errorMessage: string | null }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-textPrimary">{errorMessage}</h1>
    </div>
  );
}

export default GenericErrorMessage;
