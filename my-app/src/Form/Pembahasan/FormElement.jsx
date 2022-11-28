import React from 'react';

export default class FormElement extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  };
  handleSubmit = () => {
    alert(`
    nama:${this.state.nama}
    jurusan:${this.state.jurusan}
    gender:${this.state.gender}
    alamat:${this.state.alamat}  
    member:${this.state.member ? 'yes' : 'no'} `);
  };
  render() {
    return (
      <div style={{ margin: '100px 100px 100px 300px', border: '1px solid gray', padding: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama : <input type={'text'} name="nama" onChange={(e) => this.setState({ nama: e.target.value })} />
          </label>
          <br />
          <label>
            Jurusan:{' '}
            <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">sistem informasi</option>
              <option value="Desain Komunikasi Visual">Desain Komunikasi visual</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin :
            <input type="radio" value="laki-laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Laki-laki
            <input type="radio" value="perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Perempuan
          </label>
          <br />
          <label>
            Alamat : <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} />
          </label>
          <br />
          <label>
            Member : <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          </label>
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
