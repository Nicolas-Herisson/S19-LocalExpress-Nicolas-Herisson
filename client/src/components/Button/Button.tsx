import "./Button.scss"

export default function Button({ label }: { label: string }) {
    return (
        <button type="button">{label}</button>
    )
}