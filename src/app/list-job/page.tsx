'use client';
import { createJob } from "@/serverActions/jobActions";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [orgName, setorgName] = useState('');
  const [remote, setremote] = useState('');

  const handleCreateJob = async () => await createJob({
    title,
    description,
    orgName,
    remote,
    user_Id: '123',
  })
          

  return (
    <div className="container mx-auto">
      <input 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        placeholder="orgName" 
        value={orgName} 
        onChange={(e) => setorgName(e.target.value)} 
      />
      <input 
        placeholder="remote" 
        value={remote} 
        onChange={(e) => setremote(e.target.value)} 
      />
      <button onClick={handleCreateJob}>Add</button>
    </div>
  );
};

export default Page;
