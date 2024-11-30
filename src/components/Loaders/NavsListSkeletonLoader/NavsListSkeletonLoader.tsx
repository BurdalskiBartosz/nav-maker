const NavsListSkeletonLoader = () => {
  return (
    <div role="status" className="flex animate-pulse flex-col gap-y-4">
      <div className="flex min-h-[96px] items-center justify-between rounded-md border border-secondary bg-gray-200 px-4 py-6 duration-200"></div>
      <div className="flex min-h-[96px] items-center justify-between rounded-md border border-secondary bg-gray-200 px-4 py-6 duration-200"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default NavsListSkeletonLoader;
