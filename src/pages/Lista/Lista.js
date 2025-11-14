import React, { useState } from "react";
import "./Lista.css";

function Lista({ contacts, setContacts }) {
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const handleEdit = (contact) => {
    setEditingId(contact.id);
    setNewName(contact.name);
    setNewPhone(contact.phone);
  };

  const handleSave = (id) => {
    setContacts(
      contacts.map((c) =>
        c.id === id ? { ...c, name: newName, phone: newPhone } : c
      )
    );
    setEditingId(null);
  };

  return (
    <div className="lista-container">
      <h2>Lista de Contatos</h2>
      {contacts.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {editingId === contact.id ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                  />
                  <button onClick={() => handleSave(contact.id)}>Salvar</button>
                </>
              ) : (
                <>
                  <span>{contact.name} - {contact.phone}</span>
                  <button onClick={() => handleEdit(contact)}>Editar</button>
                  <button onClick={() => handleDelete(contact.id)}>Excluir</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;