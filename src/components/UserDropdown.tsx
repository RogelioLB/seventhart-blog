import { Avatar, Dropdown } from 'flowbite-react';
import useUser from '../hooks/useUser';
import { supabase } from '../database';

export default function UserDropdown() {
  const {user,role} = useUser()
  
  return (
    <Dropdown
      inline
      label={user ? <Avatar alt='User profile' rounded img={user.user_metadata.avatar_url}/> : <Avatar alt="User settings" rounded/>}
    >
      {
        user && (
          <Dropdown.Header>
            <span className="block text-sm">
              {user.user_metadata.name}
            </span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
        )
      }
      <Dropdown.Item><a href="/" className='flex-1'>Inicio</a></Dropdown.Item>
      <Dropdown.Item>
        Curiosidades
      </Dropdown.Item>
      <Dropdown.Divider />
      {user && role==='ADMIN' && <Dropdown.Item><a className="flex-1" href='/dashboard'>Dashboard</a></Dropdown.Item>}
      <Dropdown.Item>
        {
          user ? <button className='flex-1 text-start' onClick={async()=>await supabase.auth.signOut()}>SingOut</button> : <a className='flex-1' href={`/signin?redirect=${location.pathname}`}>Sign In</a>
        }
      </Dropdown.Item>
    </Dropdown>
  )
}


