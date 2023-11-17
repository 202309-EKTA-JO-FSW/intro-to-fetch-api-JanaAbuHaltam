// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData() {
    
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      console.log('Fetched User Data:', userData);
      return userData;

      
}

var data = await response.json();
    console.log(data);
    const modifiedUserData = usersData.map
    {
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address.street,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
      }

      console.log('Modified User Data:', modifiedUserData);
      console.log('Filtered User Data:', filteredUserData);
      console.log('Sorted User Data:', sortedUserData);



       
      return modified: modifiedUserData;
      return filtered: filteredUserData;
      return sorted: sortedUserData;

      catch (error) {
        console.error('Error fetching or processing user data:', error.message);
      }
      fetchUserData();
