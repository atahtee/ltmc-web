import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Mail, FileText, X } from 'lucide-react';

const DeleteData = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmOpen(true);
  };

  const confirmDeletion = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://yourapi.com/delete-account-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reason }),
      });

      if (response.ok) {
        setSubmitted(true);
        setIsConfirmOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Request failed");
      }
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: '1rem',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '450px',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
    fontSize: '0.95rem',
    transition: 'border-color 0.2s',
  };

  const inputFocusStyle = {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  };

  const textareaStyle = {
    ...inputStyle,
    paddingTop: '0.75rem',
    minHeight: '120px',
    resize: 'vertical',
    lineHeight: '1.5',
  };

  const iconWrapperStyle = {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#9ca3af',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#374151',
  };

  const confirmModalStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 50,
    backdropFilter: 'blur(4px)',
  };

  const confirmBoxStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '1.5rem',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  };

  if (submitted) {
    return (
      <div style={containerStyle}>
        <div style={{
          ...cardStyle,
          borderTop: '4px solid #10b981',
          textAlign: 'center',
          padding: '2.5rem 2rem',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            animation: 'bounceIn 0.6s',
          }}>
            <CheckCircle size={72} color="#10b981" strokeWidth={1.5} />
          </div>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
            lineHeight: '1.3',
          }}>
            Request Submitted Successfully
          </h2>
          <p style={{
            color: '#4b5563',
            marginBottom: '1.5rem',
            lineHeight: '1.6',
          }}>
            We've received your account deletion request. Your account and data will be removed within 30 days.
          </p>
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#065f46',
              fontWeight: 500,
            }}>
              Confirmation sent to <span style={{ fontWeight: 600 }}>{email}</span>
            </p>
          </div>
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            lineHeight: '1.5',
          }}>
            If you didn't receive an email, please check your spam folder or contact support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ marginBottom: '1.75rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem',
            lineHeight: '1.3',
          }}>
            Delete Your Account
          </h2>
          <p style={{
            color: '#4b5563',
            lineHeight: '1.5',
          }}>
            Request permanent deletion of your account and all associated data.
          </p>
        </div>

        <div style={{
          backgroundColor: '#fffbeb',
          borderLeft: '4px solid #f59e0b',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1.75rem',
          display: 'flex',
          gap: '0.75rem',
        }}>
          <div style={{ flexShrink: 0 }}>
            <AlertCircle size={20} color="#f59e0b" />
          </div>
          <p style={{
            fontSize: '0.875rem',
            color: '#92400e',
            lineHeight: '1.5',
          }}>
            This action <strong>cannot be undone</strong>. All your data will be permanently removed from our systems.
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            borderLeft: '4px solid #ef4444',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
            display: 'flex',
            gap: '0.75rem',
          }}>
            <div style={{ flexShrink: 0 }}>
              <AlertCircle size={20} color="#ef4444" />
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#b91c1c',
              lineHeight: '1.5',
            }}>
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem', position: 'relative' }}>
            <label style={labelStyle}>Email Address</label>
            <div style={iconWrapperStyle}>
              <Mail size={20} />
            </div>
            <input
              type="email"
              required
              style={{
                ...inputStyle,
                ':focus': inputFocusStyle,
              }}
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = inputFocusStyle.borderColor;
                e.target.style.boxShadow = inputFocusStyle.boxShadow;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = inputStyle.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '1.75rem', position: 'relative' }}>
            <label style={labelStyle}>Reason for deletion (optional)</label>
            <div style={{ ...iconWrapperStyle, top: '1.75rem' }}>
              <FileText size={20} />
            </div>
            <textarea
              rows={4}
              style={{
                ...textareaStyle,
                ':focus': inputFocusStyle,
              }}
              placeholder="Please let us know why you're leaving..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = inputFocusStyle.borderColor;
                e.target.style.boxShadow = inputFocusStyle.boxShadow;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = inputStyle.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.875rem 1rem',
              borderRadius: '0.5rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
            onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.3)'}
            onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            Request Account Deletion
          </button>
        </form>

        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          marginTop: '2rem',
          textAlign: 'center',
          lineHeight: '1.5',
        }}>
          Need help? Contact us at <span style={{ fontWeight: 500 }}>support@futureself.com</span>
        </p>
      </div>

      {/* Confirmation Modal */}
      {isConfirmOpen && (
        <div style={confirmModalStyle}>
          <div style={confirmBoxStyle}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1.25rem',
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#111827',
                lineHeight: '1.3',
              }}>
                Confirm Account Deletion
              </h3>
              <button
                onClick={() => setIsConfirmOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9ca3af',
                  padding: '0.25rem',
                  borderRadius: '0.25rem',
                }}
                aria-label="Close"
                onMouseOver={(e) => e.currentTarget.color = '#6b7280'}
                onMouseOut={(e) => e.currentTarget.color = '#9ca3af'}
              >
                <X size={20} />
              </button>
            </div>
            <p style={{
              color: '#4b5563',
              marginBottom: '1rem',
              lineHeight: '1.5',
            }}>
              Are you sure you want to delete your account? This action <strong>cannot be undone</strong>.
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              marginBottom: '1.75rem',
              lineHeight: '1.5',
            }}>
              All your data will be permanently removed from our systems within 30 days.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setIsConfirmOpen(false)}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f3f4f6',
                  color: '#1f2937',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.backgroundColor = '#e5e7eb'}
                onMouseOut={(e) => e.currentTarget.backgroundColor = '#f3f4f6'}
              >
                Cancel
              </button>
              <button
                onClick={confirmDeletion}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: 500,
                  opacity: isLoading ? 0.8 : 1,
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => !isLoading && (e.currentTarget.backgroundColor = '#b91c1c')}
                onMouseOut={(e) => !isLoading && (e.currentTarget.backgroundColor = '#dc2626')}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      border: '2px solid white',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }} />
                    Processing...
                  </>
                ) : (
                  'Yes, Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteData;