import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { uploadFunc } from '../actions/file';

const Dropzone = (props) => {
  const { upload } = props;
  const selectedFieldSets = new Set();
  const fieldSets = [
    'invoice',
    'generic',
    'document',
    'bpay',
    'bill',
    'bank'
  ];

  const onDrop = useCallback(files => {
    upload(files[0], selectedFieldSets);
  }, [upload]);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <aside>
        <h4>Files (only support one file at a time)</h4>
        <ul>{files}</ul>
      </aside>
      <div className={isDragActive? 'dropzone dropzone--active' : 'dropzone'} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="fieldset-container">
        { fieldSets.map((field, index) => (
          <span key={field}>
            <label><input type="checkbox" name="fieldSets" value={`sypht.${field}`} onChange={
              e => {
                if (selectedFieldSets.has(e.target.value)) {
                  selectedFieldSets.delete(e.target.value);
                } else {
                  selectedFieldSets.add(e.target.value);
                }
              }
            } />{field}</label>
          </span>
        )) }
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    upload: (file, fieldSets) => dispatch(uploadFunc(file, fieldSets))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Dropzone);