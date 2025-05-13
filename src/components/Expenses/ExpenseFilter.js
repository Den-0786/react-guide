export default function ExpenseFilter (props) {
    
        const dropdownChangeHandler = (event) => {
            props.onFilterChange(event.target.value);
        };

        return (
            <div className="bg-gray-800 rounded-md py-1 px-4 mb-4">
                <div className="flex justify-between items-center">
                    <label className=" text-white">Filter by year</label>
                    <select 
                    value={props.selected} 
                    onChange={dropdownChangeHandler} 
                    className="text-gray-900 text-semibold px-2 py-1 rounded-lg bg-white border border-amber-300" >
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
            </div>
        );
    };