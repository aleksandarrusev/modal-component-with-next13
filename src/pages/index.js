import Modal from "../components/Modal";
import {useState} from "react";


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                Hello from the modal!
            </Modal>
        }
      </div>
  )
}
