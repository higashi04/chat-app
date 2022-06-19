import React from "react";
import { useState } from "react";
import { Tab, Nav, Modal } from "react-bootstrap";
import Conversations from "../Conversations/Conversations";
import Contacts from "../Contacts/Contacts";
import NewConversationModal from "../NewConversationModal/NewConversationModal";
import NewContactModal from "../NewContactModal/NewContactModal";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function SideBar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ width: "250px" }}>
      <Tab.Container
        activeKey={activeKey}
        onSelect={setActiveKey}
        className="d-flex flex-column d-grip"
      >
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          style={{ height: "80vh" }}
          className="border-end overflow-auto panel flex-grow-1"
        >
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-end small">
          Your Id is <span className="text-muted">{id}</span>
        </div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary rounded-0 btn-block customBtn">
          New {conversationsOpen ? "Conversation" : "Contact"}
        </button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
