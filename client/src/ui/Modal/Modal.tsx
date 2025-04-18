import "@/ui/Modal/modal.scss"
import Button from "@/components/Button/Button"
import type { Dispatch, SetStateAction } from "react";

export default function Modal({ children, setIsOpenModal }: ModalProps) {
    return (
        <div className={"modal"}>
            <div className="modal-content">
                {children}
                <Button label="X" onClick={() => {setIsOpenModal(false)}} className="modal-close" />
            </div>
        </div>
    )
}

interface ModalProps {
    children: React.ReactNode;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}