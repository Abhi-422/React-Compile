const Input = ({ value, onChange, placeholder = "Search for Movie" }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  );
};

export default Input;
