import React from 'react';
import { Command } from 'cmdk';
import "./search.css"
function search() {
  return (
    <Command className='main' label='Command Menu'>
        <Command.Input />
            <Command.List>
                <Command.Empty>No result found</Command.Empty>

                <Command.Group heading="Letters">
                    <Command.Item>a</Command.Item>
                    <Command.Item>b</Command.Item>
                    <Command.Separator />
                    <Command.Item>b</Command.Item>
                </Command.Group>
                <Command.Item>Apple</Command.Item>
            </Command.List>
    </Command>
  )
}

export default search;