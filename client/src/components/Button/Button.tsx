import "./Button.scss"

export default function Button({ label, onClick }: { label: string, onClick?: () => void }) {
    return (
        <button className={`button-${label}`} type="button" onClick={onClick}>{label}</button>
    )
}