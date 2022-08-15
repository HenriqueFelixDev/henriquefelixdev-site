export function ButtonLink({ children, className, ...props }) {
    return (
        <a 
            { ...props }
            className={'inline-block bg-secondary hover:opacity-70 active:bg-secondaryDark transition-all text-white rounded-full px-6 py-2 ' + className}
        >
          { children }
        </a>
    )
}