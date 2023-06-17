import { useState } from 'react';
import MenuContext from './MenuContext';

const MenuProvider = ({ children }) => {
	const [isMenu, setIsMenu] = useState(false);
	return (
		<MenuContext.Provider value={{ isMenu, setIsMenu }}>
			{children}
		</MenuContext.Provider>
	)
}

export default MenuProvider;