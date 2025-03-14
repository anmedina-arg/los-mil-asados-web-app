import React from "react";

import { ReactNode } from "react";

const Widget = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col border-2 border-solid border-gray-500">
			{children}
		</div>
	)
};

export default Widget;