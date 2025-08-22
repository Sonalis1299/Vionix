import React from 'react'
import WorkspaceProvider from '@/app/workspace/provider'

function WorkspaceLayout({children}){
    return(
       <div>
        <WorkspaceProvider>
            {children}
            </WorkspaceProvider>
        </div>
    )    
}

export default WorkspaceLayout