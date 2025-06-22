import { useState, useEffect } from 'react';
import Modal from './Modal';

interface RulesButtonProps {
  mode: string;
  setMode: (mode: string) => void;
}

const RulesButton = ({ mode, setMode }: RulesButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, [mode]);

  return (
    <>
      <div className='fixed bottom-6 right-6 flex gap-3'>
        <button onClick={() => setMode("")} className='hover:bg-red-400 bg-red-500 text-white py-3 px-5'>Back</button>
        <button
          onClick={openModal}
          className=" px-8 py-2 border-white border text-white font-bold tracking-wider rounded-lg hover:bg-gray-800 transition-colors duration-200 z-10"
        >
          RULES
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="RULES">
        <img
          src={mode === "original" ? "../assets/image-rules.svg" : "../assets/image-rules-bonus.svg"}
          alt="Rules"
          className="w-full max-w-sm mx-auto"
        />
      </Modal>
    </>
  );
};

export default RulesButton;
