import { Avatar, Dropdown } from 'flowbite-react';
import useUser from '../hooks/useUser';
import { supabase } from '../database';

export default function UserDropdown() {
  const [user] = useUser()
  console.log(user?.user_metadata)
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
      {user && <Dropdown.Item>Dashboard</Dropdown.Item>}
      <Dropdown.Item>
        Curiosidades
      </Dropdown.Item>
      <Dropdown.Item>
        {
          user ? <button onClick={async()=>await supabase.auth.signOut()}>SingOut</button> : <a href={`/signin?redirect=${location.pathname}`}>Sign In</a>
        }
      </Dropdown.Item>
    </Dropdown>
  )
}


