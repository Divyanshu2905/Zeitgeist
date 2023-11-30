export const findClosestMatch = (objects, searchStr)=> {
    if (!searchStr) {
        return objects;
    }
    else if(!objects.length){
        return [];
    }

    const matches = objects.filter((object) => {
        const { name, category, description } = object;

        const lowerCaseSearchStr = searchStr.toLowerCase();

        // Check if the search string is found in any property
        return (
            name.toLowerCase().includes(lowerCaseSearchStr) ||
            category.toLowerCase().includes(lowerCaseSearchStr) ||
            description.toLowerCase().includes(lowerCaseSearchStr)
        );
    });

    return matches;
}

