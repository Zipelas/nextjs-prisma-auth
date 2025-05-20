export default function Nav() {

const { data } = useSession();

data?



return (

    <nav className="flex gap-2">
        {data ? (
            <>
            <Link href='/create-post'>Create</Link>
            <button onClick={() => signOut()}</button>
        </>
    )}
    </nav>
    )

}