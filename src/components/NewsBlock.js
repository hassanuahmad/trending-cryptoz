const NewsBlock = ({ newsName }) => {
    return (
        <div className="grid grid-cols-1">
            <button className="bg-filter bg-opacity-75 bg-gray-50 hover:bg-gray-100 p-4 rounded shadow">
                <a
                    href={newsName.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {newsName.Title}
                </a>
            </button>
        </div>
    );
};

export default NewsBlock;
