import Select from 'react-select';

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        height: '24px',
        borderRadius: '0.125rem',
        borderColor: '#000000', 
        backgroundColor: '#F3F4F6', // bg-gray-100
        boxShadow: 'none', 
        '&:hover': { borderColor: '#000000' },
    }),
    menuList: (provided: any) => ({
        ...provided,
        padding: 0,
    }),
    option: (provided: any) => ({
        ...provided,
        backgroundColor: '#F3F4F6',
        color: '#8B0000',
        padding: '0.2rem 0.5rem',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#9CA3AF',
        fontSize: '0.92rem'
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#8B0000',
    })
}

const SelectPersonalized = () => (
    <Select
        isMulti
        placeholder='Categorias'
        options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]}
        styles={customStyles}
    />
);

export default SelectPersonalized;
